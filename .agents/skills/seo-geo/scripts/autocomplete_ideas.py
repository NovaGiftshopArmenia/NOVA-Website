#!/usr/bin/env python3
"""
Google Autocomplete keyword suggestions using DataForSEO API
Get real-time search suggestions from Google Autocomplete

Usage: python3 scripts/autocomplete_ideas.py "Claude Code"
"""
import argparse
from dataforseo_api import api_post, get_result


def main():
    parser = argparse.ArgumentParser(description="Google Autocomplete keyword suggestions")
    parser.add_argument("keyword", help="Seed keyword for autocomplete")
    parser.add_argument("--location", "-loc", type=int, default=2840,
                        help="Location code (default: 2840 = US)")
    args = parser.parse_args()

    data = [{
        "keyword": args.keyword,
        "location_code": args.location,
        "language_code": "en"
    }]
    
    response = api_post("serp/google/autocomplete/live/advanced", data)
    results = get_result(response)
    
    print(f"keyword: {args.keyword}")
    print(f"location: {args.location}")
    
    if not results:
        print("No autocomplete suggestions found.")
        return
    
    items = results[0].get("items", []) if results else []
    
    print(f"\nAutocomplete suggestions ({len(items)} found):")
    print("-" * 50)
    for i, item in enumerate(items, 1):
        suggestion = item.get("suggestion", "")
        print(f"  {i:2}. {suggestion}")


if __name__ == "__main__":
    main()
