#!/usr/bin/env python3
"""
SERP analysis using DataForSEO API
Usage: python3 scripts/serp_analysis.py "best seo tools" --depth 20
"""
import argparse
from dataforseo_api import api_post, get_result, print_serp_list, format_count


def main():
    parser = argparse.ArgumentParser(description="SERP analysis")
    parser.add_argument("keyword", help="Search keyword")
    parser.add_argument("--location", "-loc", type=int, default=2840,
                        help="Location code (default: 2840 = US)")
    parser.add_argument("--depth", "-d", type=int, default=20, help="Search depth (default: 20)")
    args = parser.parse_args()

    data = [{
        "keyword": args.keyword,
        "location_code": args.location,
        "language_code": "en",
        "depth": args.depth
    }]

    response = api_post("serp/google/organic/live/advanced", data)
    results = get_result(response)

    print(f"keyword: {args.keyword}")
    print(f"location: {args.location}")
    
    if results:
        items_count = results[0].get("items_count", 0)
        total = results[0].get("se_results_count", 0)
        print(f"results shown: {items_count}")
        print(f"total results: {format_count(total)}")
    
    print_serp_list(results, args.depth)


if __name__ == "__main__":
    main()
