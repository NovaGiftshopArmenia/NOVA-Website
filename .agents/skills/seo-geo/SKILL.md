---
name: seo-geo
description: SEO & GEO (Generative Engine Optimization) for websites. Analyze keywords, generate schema markup, optimize for AI search engines (ChatGPT, Perplexity, Gemini, Copilot, Claude) and traditional search (Google, Bing). Use when user wants to improve search visibility, search optimization, search ranking, AI visibility, ChatGPT ranking, Google AI Overview, indexing, JSON-LD, meta tags, or keyword research.
---

# SEO/GEO Optimization Skill

Comprehensive SEO and GEO (Generative Engine Optimization) for websites. Optimize for both traditional search engines (Google, Bing) and AI search engines (ChatGPT, Perplexity, Gemini, Copilot, Claude).

## Quick Reference

**GEO = Generative Engine Optimization** - Optimizing content to be cited by AI search engines.

**Key Insight:** AI search engines don't rank pages - they **cite sources**. Being cited is the new "ranking #1".

## Workflow

### Step 1: Website Audit

Get the target URL and analyze current SEO/GEO status.

**Check Meta Tags:**
```bash
curl -sL "https://example.com" | grep -E "<title>|<meta name=\"description\"|<meta property=\"og:|application/ld\+json" | head -20
```
**Use this for**: Quick check of essential meta tags and schema markup on any webpage.

---

**Check robots.txt:**
```bash
curl -s "https://example.com/robots.txt"
```
**Use this for**: Verify which bots are allowed/blocked. Critical for ensuring AI search engines can crawl your site.

---

**Check sitemap:**
```bash
curl -s "https://example.com/sitemap.xml" | head -50
```
**Use this for**: Verify sitemap structure and ensure all important pages are included.

**Verify AI Bot Access — These bots must be allowed in robots.txt:**
- Googlebot (Google)
- Bingbot (Bing/Copilot)
- PerplexityBot (Perplexity)
- ChatGPT-User (ChatGPT with browsing)
- ClaudeBot / anthropic-ai (Claude)
- GPTBot (OpenAI)

---

### Step 2: Keyword Research

Use WebSearch to research target keywords:
```
WebSearch: "{keyword} keyword difficulty site:ahrefs.com OR site:semrush.com"
WebSearch: "{keyword} search volume 2026"
WebSearch: "site:{competitor.com} {keyword}"
```

**Analyze:**
- Search volume and difficulty
- Competitor keyword strategies
- Long-tail keyword opportunities
- International keyword conflicts

---

### Step 3: GEO Optimization (AI Search Engines)

Apply the **9 Princeton GEO Methods** (see references/geo-research.md):

| Method | Visibility Boost | How to Apply |
|--------|-----------------|--------------|
| **Cite Sources** | +40% | Add authoritative citations and references |
| **Statistics Addition** | +37% | Include specific numbers and data points |
| **Quotation Addition** | +30% | Add expert quotes with attribution |
| **Authoritative Tone** | +25% | Use confident, expert language |
| **Easy-to-understand** | +20% | Simplify complex concepts |
| **Technical Terms** | +18% | Include domain-specific terminology |
| **Unique Words** | +15% | Increase vocabulary diversity |
| **Fluency Optimization** | +15-30% | Improve readability and flow |
| ~~Keyword Stuffing~~ | **-10%** | **AVOID - hurts visibility** |

**Best Combination:** Fluency + Statistics = Maximum boost

---

### Step 4: On-Page SEO

**Title Tag Formula:**
```
Primary Keyword - Secondary Modifier | Brand Name
Max 60 characters
```

**Meta Description Formula:**
```
Action verb + value proposition + primary keyword + CTA
Max 155 characters
```

**Schema Markup — Priority Order for E-Commerce:**
1. `Organization` — homepage
2. `Product` + `Offer` + `AggregateRating` — product pages
3. `BreadcrumbList` — all pages
4. `FAQPage` — blog/glossary pages

---

### Step 5: Technical Checklist

- [ ] robots.txt allows all major bots including AI crawlers
- [ ] XML sitemap submitted to Google Search Console
- [ ] All product/category/blog pages are indexable (no noindex)
- [ ] Self-referencing canonical tags on every URL
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Structured data validated at schema.org/validator
- [ ] Google Business Profile complete
- [ ] HTTPS enforced site-wide

---

### Step 6: Link Building

**Priority order:**
1. Skyscraper outreach (replace inferior linked content)
2. Digital PR (original data, expert commentary)
3. Unlinked brand mention conversion
4. Niche directory listings

**Anchor text distribution:**
- Branded: 40-50%
- Natural/Generic: 20-25%
- Partial-match: 15-20%
- Exact-match keyword: 5-10%

---

## Source
Skill sourced from: https://github.com/ReScienceLab/opc-skills
Original skill: seo-geo
Installed manually (Node.js not available on this machine)
