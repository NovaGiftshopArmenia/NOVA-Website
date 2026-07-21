#!/usr/bin/env python3
"""
Domain overview using DataForSEO API
Usage: python3 scripts/domain_overview.py "example.com"
"""
import argparse
from dataforseo_api import api_post, get_result, format_count


def main():
    parser = argparse.ArgumentParser(description="Domain overview")
    parser.add_argument("domain", help="Target domain")
    parser.add_argument("--location", "-loc", type=int, default=2840,
                        help="Location code (default: 2840 = US)")
    args = parser.parse_args()

    data = [{
        "target": args.domain,
        "location_code": args.location,
        "language_code": "en",
        "limit": 10
    }]

    response = api_post("dataforseo_labs/google/domain_rank_overview/live", data)
    results = get_result(response)

    print(f"domain: {args.domain}")
    print(f"location: {args.location}")

    if not results:
        print("No data found for this domain.")
        return

    metrics = results[0].get("metrics", {}) or {}
    organic = metrics.get("organic", {}) or {}
    paid = metrics.get("paid", {}) or {}

    print(f"\n{'=' * 50}")
    print(f"  Domain Overview: {args.domain}")
    print(f"{'=' * 50}")
    print(f"  Organic Keywords : {format_count(organic.get('count'))}")
    print(f"  Organic Traffic  : {format_count(organic.get('etv'))}")
    print(f"  Paid Keywords    : {format_count(paid.get('count'))}")
    print(f"  Paid Traffic     : {format_count(paid.get('etv'))}")
    
    # Top keywords
    items = results[0].get("items", []) or []
    if items:
        print(f"\n  Top Keywords:")
        print(f"  {'Keyword':<40} {'Pos':>5} {'Vol':>8}")
        print(f"  {'-' * 55}")
        for item in items[:10]:
            kw = item.get("keyword", "")
            pos = item.get("ranked_serp_element", {}).get("serp_item", {}).get("rank_absolute", "?")
            kw_info = item.get("keyword_data", {}).get("keyword_info", {}) or {}
            vol = format_count(kw_info.get("search_volume"))
            print(f"  {kw:<40} {str(pos):>5} {vol:>8}")
    print()


if __name__ == "__main__":
    main()
