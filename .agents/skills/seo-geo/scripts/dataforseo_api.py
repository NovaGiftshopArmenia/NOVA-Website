#!/usr/bin/env python3
"""
DataForSEO API wrapper
"""
import urllib.request
import urllib.parse
import json
import base64
import sys
from credential import get_dataforseo_credentials

API_BASE = "https://api.dataforseo.com/v3"


def api_post(endpoint: str, data: list) -> dict:
    """Make POST request to DataForSEO API"""
    login, password = get_dataforseo_credentials()
    if not login or not password:
        print("error: DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD not set", file=sys.stderr)
        print("Run: export DATAFORSEO_LOGIN=your_login", file=sys.stderr)
        print("     export DATAFORSEO_PASSWORD=your_password", file=sys.stderr)
        sys.exit(1)
    
    url = f"{API_BASE}/{endpoint}"
    auth = base64.b64encode(f"{login}:{password}".encode()).decode()
    headers = {
        "Authorization": f"Basic {auth}",
        "Content-Type": "application/json"
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode(),
        headers=headers,
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        print(f"error: HTTP {e.code} - {error_body}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"error: {e}", file=sys.stderr)
        sys.exit(1)


def get_result(response: dict) -> list:
    """Extract results from DataForSEO response"""
    if not response:
        return []
    tasks = response.get("tasks", [])
    if not tasks:
        return []
    result = tasks[0].get("result", [])
    return result or []


def format_count(n) -> str:
    """Format large numbers with K/M suffix"""
    if n is None:
        return "N/A"
    n = int(n)
    if n >= 1_000_000:
        return f"{n/1_000_000:.1f}M"
    if n >= 1_000:
        return f"{n/1_000:.1f}K"
    return str(n)


def print_keywords_list(items: list, limit: int = 20):
    """Print keyword list in a readable format"""
    if not items:
        print("No results found.")
        return
    
    print(f"\n{'Keyword':<45} {'Volume':>8} {'CPC':>7} {'Comp':>6}")
    print("-" * 70)
    
    for item in items[:limit]:
        kw_data = item.get("keyword_info", {}) or {}
        kw = item.get("keyword", "")
        vol = format_count(kw_data.get("search_volume"))
        cpc = f"${kw_data.get('cpc', 0) or 0:.2f}"
        comp = f"{(kw_data.get('competition') or 0):.2f}"
        print(f"{kw:<45} {vol:>8} {cpc:>7} {comp:>6}")
    
    print(f"\nShowing {min(limit, len(items))} of {len(items)} results")


def print_serp_list(items: list, limit: int = 20):
    """Print SERP results in a readable format"""
    if not items:
        print("No results found.")
        return
    
    items_list = items[0].get("items", []) if items else []
    organic = [i for i in items_list if i.get("type") == "organic"]
    
    print(f"\n{'#':<4} {'URL':<60} {'Title'}")
    print("-" * 100)
    
    for i, item in enumerate(organic[:limit], 1):
        url = item.get("url", "")[:58]
        title = item.get("title", "")[:40]
        print(f"{i:<4} {url:<60} {title}")


def print_backlinks_list(items: list, limit: int = 20):
    """Print backlinks in a readable format"""
    if not items:
        print("No results found.")
        return
    
    backlinks = items[0].get("items", []) if items else []
    
    print(f"\n{'Source URL':<65} {'Type':<10} {'DoFollow'}")
    print("-" * 90)
    
    for item in backlinks[:limit]:
        url = (item.get("url_from") or "")[:63]
        link_type = item.get("type", "")
        dofollow = "Yes" if item.get("dofollow") else "No"
        print(f"{url:<65} {link_type:<10} {dofollow}")
    
    print(f"\nShowing {min(limit, len(backlinks))} backlinks")
