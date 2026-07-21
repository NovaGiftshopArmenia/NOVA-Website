#!/usr/bin/env python3
"""
Competitor keyword gap analysis using DataForSEO API
Finds keywords where competitor ranks but you don't

Usage: python3 scripts/competitor_gap.py "opc.dev" "claudemarketplaces.com" --limit 50
"""
import argparse
from dataforseo_api import api_post, get_result, format_count


def main():
    parser = argparse.ArgumentParser(description="Competitor keyword gap analysis")
    parser.add_argument("my_domain", help="Your domain (without https://)")
    parser.add_argument("competitor_domain", help="Competitor domain (without https://)")
    parser.add_argument("--location", "-loc", type=int, default=2840,
                        help="Location code (default: 2840 = US)")
    parser.add_argument("--limit", "-l", type=int, default=50, 
                        help="Max results (default: 50)")
    args = parser.parse_args()

    data = [{
        "target1": args.my_domain,
        "target2": args.competitor_domain,
        "location_code": args.location,
        "language_code": "en",
        "intersections": False,  # Only show keywords where target2 ranks but not target1
        "limit": args.limit
    }]

    response = api_post("dataforseo_labs/google/competitors_domain/live", data)
    results = get_result(response)

    print(f"your domain: {args.my_domain}")
    print(f"competitor: {args.competitor_domain}")
    print(f"location: {args.location}")

    if not results:
        print("No gap keywords found.")
        return

    items = results[0].get("items", []) if results else []
    
    if not items:
        print("No keyword gaps found - you may already rank for similar keywords!")
        return

    print(f"\n{'Keyword':<45} {'Vol':>8} {'Comp Pos':>9} {'CPC':>7}")
    print("-" * 75)

    for item in items[:args.limit]:
        kw = item.get("keyword", "")
        kw_data = item.get("keyword_data", {}) or {}
        kw_info = kw_data.get("keyword_info", {}) or {}
        vol = format_count(kw_info.get("search_volume"))
        
        # Get competitor's ranking position
        ranked = item.get("ranked_serp_element", {}) or {}
        pos = ranked.get("serp_item", {}).get("rank_absolute", "?") if ranked else "?"
        
        cpc = f"${kw_info.get('cpc', 0) or 0:.2f}"
        print(f"{kw:<45} {vol:>8} {str(pos):>9} {cpc:>7}")

    print(f"\nShowing {min(args.limit, len(items))} gap keywords")
    print(f"These are keywords where '{args.competitor_domain}' ranks but '{args.my_domain}' doesn't.")


if __name__ == "__main__":
    main()
