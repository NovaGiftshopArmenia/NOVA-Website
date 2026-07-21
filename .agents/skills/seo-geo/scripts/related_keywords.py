#!/usr/bin/env python3
"""
Related keywords from Google "searches related to" using DataForSEO API
Get up to 4,680 keyword ideas from Google's related searches

Usage: python3 scripts/related_keywords.py "AI agent" --depth 2 --limit 50
"""
import argparse
from dataforseo_api import api_post, get_result, format_count


def main():
    parser = argparse.ArgumentParser(description="Related keywords from Google")
    parser.add_argument("keyword", help="Seed keyword")
    parser.add_argument("--location", "-loc", type=int, default=2840,
                        help="Location code (default: 2840 = US)")
    parser.add_argument("--depth", "-d", type=int, default=1,
                        help="Search depth 1-3 (default: 1, max keywords: depth^3 * 10)")
    parser.add_argument("--limit", "-l", type=int, default=50, 
                        help="Max results to display (default: 50)")
    args = parser.parse_args()

    # Validate depth
    if args.depth < 1 or args.depth > 3:
        print("Error: depth must be between 1 and 3")
        return

    data = [{
        "keyword": args.keyword,
        "location_code": args.location,
        "language_code": "en",
        "depth": args.depth
    }]

    response = api_post("serp/google/related_searches/live/advanced", data)
    results = get_result(response)

    print(f"keyword: {args.keyword}")
    print(f"location: {args.location}")
    print(f"depth: {args.depth}")

    if not results:
        print("No related keywords found.")
        return

    # Collect all keywords across depth levels
    all_keywords = []
    for result in results:
        items = result.get("items", []) or []
        for item in items:
            kw = item.get("title", "")
            if kw:
                all_keywords.append(kw)

    print(f"\nRelated keywords ({len(all_keywords)} found):")
    print("-" * 50)
    for i, kw in enumerate(all_keywords[:args.limit], 1):
        print(f"  {i:3}. {kw}")

    if len(all_keywords) > args.limit:
        print(f"\n  ... and {len(all_keywords) - args.limit} more")


if __name__ == "__main__":
    main()
