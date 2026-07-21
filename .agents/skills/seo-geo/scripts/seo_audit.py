#!/usr/bin/env python3
"""
SEO audit script (no API required)
Usage: python3 scripts/seo_audit.py "https://example.com"
"""
import argparse
import urllib.request
import urllib.parse
import re
import time
import sys


def fetch_url(url: str, timeout: int = 30) -> tuple:
    """Fetch URL and return (content, headers, load_time)"""
    try:
        start = time.time()
        req = urllib.request.Request(url, headers={"User-Agent": "SEO-Audit/1.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            content = resp.read().decode("utf-8", errors="ignore")
            headers = dict(resp.headers)
            load_time = time.time() - start
            return content, headers, load_time
    except Exception as e:
        return None, None, None


def extract_meta(html: str) -> dict:
    """Extract meta tags from HTML"""
    result = {}
    
    # Title
    title_match = re.search(r"<title[^>]*>([^<]+)</title>", html, re.I)
    result["title"] = title_match.group(1).strip() if title_match else None
    
    # Meta description
    desc_match = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
    if not desc_match:
        desc_match = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+name=["\']description["\']', html, re.I)
    result["description"] = desc_match.group(1).strip() if desc_match else None
    
    # OG tags
    og_match = re.search(r'<meta[^>]+property=["\']og:title["\']', html, re.I)
    result["og_tags"] = bool(og_match)
    
    # JSON-LD
    jsonld_count = len(re.findall(r'application/ld\+json', html, re.I))
    result["jsonld_count"] = jsonld_count
    
    # H1 (handle inline tags like <br>)
    h1_match = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    if h1_match:
        h1_text = re.sub(r"<[^>]+>", "", h1_match.group(1)).strip()
        result["h1"] = h1_text
    else:
        result["h1"] = None
    
    # H2 count
    result["h2_count"] = len(re.findall(r"<h2[^>]*>", html, re.I))
    
    # Images without alt
    img_tags = re.findall(r"<img[^>]+>", html, re.I)
    imgs_without_alt = sum(1 for img in img_tags if not re.search(r'alt=["\'][^"\']+["\']', img, re.I))
    result["imgs_total"] = len(img_tags)
    result["imgs_without_alt"] = imgs_without_alt
    
    # Canonical
    canonical_match = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', html, re.I)
    if not canonical_match:
        canonical_match = re.search(r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']canonical["\']', html, re.I)
    result["canonical"] = canonical_match.group(1).strip() if canonical_match else None
    
    # Robots meta
    robots_match = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
    result["robots"] = robots_match.group(1).strip() if robots_match else None
    
    return result


def check_robots_txt(base_url: str) -> dict:
    """Check robots.txt"""
    parsed = urllib.parse.urlparse(base_url)
    robots_url = f"{parsed.scheme}://{parsed.netloc}/robots.txt"
    content, _, _ = fetch_url(robots_url)
    
    if content is None:
        return {"exists": False}
    
    sitemap_match = re.search(r"Sitemap:\s*(.+)", content, re.I)
    return {
        "exists": True,
        "has_sitemap_ref": bool(sitemap_match),
        "sitemap_url": sitemap_match.group(1).strip() if sitemap_match else None,
        "disallows_bot": "Disallow: /" in content and "User-agent: *" in content
    }


def check_sitemap(base_url: str) -> dict:
    """Check sitemap.xml"""
    parsed = urllib.parse.urlparse(base_url)
    sitemap_url = f"{parsed.scheme}://{parsed.netloc}/sitemap.xml"
    content, _, _ = fetch_url(sitemap_url)
    
    if content is None:
        return {"exists": False}
    
    url_count = len(re.findall(r"<url>", content, re.I))
    return {"exists": True, "url_count": url_count}


def check_https(url: str) -> bool:
    """Check if URL uses HTTPS"""
    return url.startswith("https://")


def score_issue(passed: bool, weight: int = 1) -> int:
    """Return score contribution"""
    return weight if passed else 0


def audit(url: str):
    """Run full SEO audit"""
    print(f"\n🔍 SEO Audit: {url}")
    print("=" * 60)
    
    # Fetch page
    print("Fetching page...")
    html, headers, load_time = fetch_url(url)
    
    if html is None:
        print(f"❌ Failed to fetch URL: {url}")
        sys.exit(1)
    
    meta = extract_meta(html)
    robots = check_robots_txt(url)
    sitemap = check_sitemap(url)
    
    issues = []
    score = 0
    max_score = 0
    
    # --- HTTPS ---
    max_score += 10
    if check_https(url):
        score += 10
        print("✅ HTTPS enabled")
    else:
        issues.append("❌ Not using HTTPS")
    
    # --- Title ---
    max_score += 10
    title = meta.get("title")
    if title:
        tlen = len(title)
        if 30 <= tlen <= 60:
            score += 10
            print(f"✅ Title ({tlen} chars): {title}")
        elif tlen < 30:
            score += 5
            issues.append(f"⚠️  Title too short ({tlen} chars): {title}")
        else:
            score += 5
            issues.append(f"⚠️  Title too long ({tlen} chars): {title}")
    else:
        issues.append("❌ Missing title tag")
    
    # --- Meta Description ---
    max_score += 10
    desc = meta.get("description")
    if desc:
        dlen = len(desc)
        if 120 <= dlen <= 160:
            score += 10
            print(f"✅ Meta description ({dlen} chars)")
        elif dlen < 120:
            score += 5
            issues.append(f"⚠️  Meta description too short ({dlen} chars)")
        else:
            score += 5
            issues.append(f"⚠️  Meta description too long ({dlen} chars)")
    else:
        issues.append("❌ Missing meta description")
    
    # --- H1 ---
    max_score += 10
    h1 = meta.get("h1")
    if h1:
        score += 10
        print(f"✅ H1 found: {h1[:50]}")
    else:
        issues.append("❌ Missing H1 tag")
    
    # --- OG Tags ---
    max_score += 5
    if meta.get("og_tags"):
        score += 5
        print("✅ Open Graph tags present")
    else:
        issues.append("⚠️  Missing Open Graph tags")
    
    # --- JSON-LD ---
    max_score += 10
    jsonld = meta.get("jsonld_count", 0)
    if jsonld > 0:
        score += 10
        print(f"✅ JSON-LD schema markup ({jsonld} block(s))")
    else:
        issues.append("❌ Missing JSON-LD schema markup")
    
    # --- Images ---
    max_score += 5
    imgs_total = meta.get("imgs_total", 0)
    imgs_no_alt = meta.get("imgs_without_alt", 0)
    if imgs_total == 0 or imgs_no_alt == 0:
        score += 5
        print(f"✅ All {imgs_total} images have alt text")
    else:
        issues.append(f"⚠️  {imgs_no_alt}/{imgs_total} images missing alt text")
    
    # --- Canonical ---
    max_score += 5
    if meta.get("canonical"):
        score += 5
        print(f"✅ Canonical URL: {meta['canonical']}")
    else:
        issues.append("⚠️  Missing canonical tag")
    
    # --- Load time ---
    max_score += 10
    if load_time is not None:
        if load_time < 1.0:
            score += 10
            print(f"✅ Load time: {load_time:.2f}s (fast)")
        elif load_time < 3.0:
            score += 5
            issues.append(f"⚠️  Load time: {load_time:.2f}s (acceptable)")
        else:
            issues.append(f"❌ Load time: {load_time:.2f}s (slow)")
    
    # --- Robots.txt ---
    max_score += 5
    if robots.get("exists"):
        score += 5
        print(f"✅ robots.txt found")
        if robots.get("has_sitemap_ref"):
            print(f"   Sitemap referenced: {robots.get('sitemap_url')}")
    else:
        issues.append("⚠️  robots.txt not found")
    
    # --- Sitemap ---
    max_score += 5
    if sitemap.get("exists"):
        score += 5
        print(f"✅ sitemap.xml found ({sitemap.get('url_count', 0)} URLs)")
    else:
        issues.append("⚠️  sitemap.xml not found")
    
    # --- Content length ---
    max_score += 5
    word_count = len(re.sub(r"<[^>]+>", " ", html).split())
    if word_count >= 300:
        score += 5
        print(f"✅ Content length: ~{word_count} words")
    else:
        issues.append(f"⚠️  Thin content: ~{word_count} words (aim for 300+)")
    
    # --- H2 structure ---
    max_score += 5
    h2_count = meta.get("h2_count", 0)
    if h2_count >= 2:
        score += 5
        print(f"✅ Heading structure: {h2_count} H2 tags")
    else:
        issues.append(f"⚠️  Few H2 tags ({h2_count}), add more structure")
    
    # Summary
    pct = int(score / max_score * 100) if max_score > 0 else 0
    print(f"\n{'=' * 60}")
    print(f"📊 SEO Score: {score}/{max_score} ({pct}%)")
    
    if pct >= 80:
        print("🟢 Good SEO health!")
    elif pct >= 60:
        print("🟡 Moderate SEO - room for improvement")
    else:
        print("🔴 Poor SEO - significant issues found")
    
    if issues:
        print(f"\n⚠️  Issues Found ({len(issues)}):")
        for issue in issues:
            print(f"   {issue}")
    
    print()


def main():
    parser = argparse.ArgumentParser(description="SEO audit (no API required)")
    parser.add_argument("url", help="URL to audit (e.g. https://example.com)")
    args = parser.parse_args()
    
    url = args.url
    if not url.startswith("http"):
        url = "https://" + url
    
    audit(url)


if __name__ == "__main__":
    main()
