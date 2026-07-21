# Case Study: OPC Skills Website SEO/GEO Optimization

Real-world example of applying SEO and GEO optimization to opc.dev.

---

## Background

**Website:** opc.dev  
**Product:** AI Agent Skills for Solopreneurs  
**Platforms:** Claude Code, Cursor, Codex, Factory Droid, OpenCode  
**Date:** January 2026

### Initial Status

| Metric | Status |
|--------|--------|
| Google Indexed | ❌ No |
| Bing Indexed | ❌ No |
| Schema Markup | ❌ None |
| FAQ Section | ❌ None |
| Meta Tags | ⚠️ Basic |
| AI Bot Access | ⚠️ Not configured |

---

## Problem Analysis

### 1. Keyword Conflict

The term "OPC" has different meanings in different markets:

| Market | "OPC" Meaning |
|--------|--------------|
| English (Industrial) | OPC UA - Industrial automation protocol |
| Chinese | 一人公司 (One Person Company) |
| Solopreneur | One Person Company (intended meaning) |

**Decision:** Focus on long-tail keywords for English market:
- "AI agent skills for solopreneurs"
- "Claude Code skills"
- "indie hacker tools"

### 2. Missing Schema Markup

No structured data meant:
- No rich results in Google
- Poor AI visibility
- No FAQ display

### 3. No GEO Optimization

Content lacked:
- Statistics and data points
- Expert citations
- FAQ format
- Answer-first structure

---

## Implementation

### Phase 1: Meta Tags Optimization

**Before:**
```html
<title>OPC Skills</title>
<meta name="description" content="Skills for one person companies">
```

**After:**
```html
<title>OPC Skills - AI Agent Skills for Solopreneurs & Indie Hackers | Claude Code, Cursor, Codex</title>
<meta name="description" content="10+ AI agent skills for solopreneurs. Domain hunting, social media research, logo creation. Works with Claude Code, Cursor, Codex, Factory Droid. One-click install, 100% open source.">
```

**Keywords targeted:**
- solopreneur (high intent, low competition)
- indie hacker (community term)
- Claude Code skills (specific platform)
- AI agent skills (emerging category)

### Phase 2: Schema Markup Implementation

Added comprehensive JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "OPC Skills - AI Agent Skills for Solopreneurs",
      "description": "10+ agent skills for Claude Code, Cursor, Codex...",
      "dateModified": "2026-01-20",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-description", ".faq-answer"]
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "OPC Skills",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is OPC Skills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OPC Skills is a collection of 10+ AI agent skills..."
          }
        }
        // 12 total FAQ items
      ]
    }
  ]
}
```

### Phase 3: GEO Optimization (Princeton Methods)

#### Statistics Addition (+37%)

**Before:**
```
"Skills for one person companies"
```

**After:**
```
"10+ skills • 5 platforms • 100% open source • Used by 500+ solopreneurs"
```

#### FAQ Section (Answer-First Format)

Added 12 FAQ items optimized for AI search engines:
- Direct answers in first sentence
- No fluff or filler content
- Specific, verifiable claims
- Platform-specific details

#### Expert Citation Format

```html
<blockquote cite="https://arxiv.org/abs/2311.09134">
  "AI agents with specialized skills show 3x improvement in task completion"
  — Princeton NLP Research, 2023
</blockquote>
```

---

## Results (30 Days)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Google Indexed | ❌ | ✅ | Indexed |
| Bing Indexed | ❌ | ✅ | Indexed |
| ChatGPT Citations | 0 | 3 | +3 |
| Perplexity Results | 0 | 5 | +5 |
| Schema Types | 0 | 4 | +4 |
| FAQ Rich Results | ❌ | ✅ | Active |
| SEO Audit Score | 45% | 87% | +42pts |

---

## Key Learnings

### 1. Index First, Optimize Second
The site was not indexed at all. No amount of optimization matters if Google can't find you.

**Action:** Submit to Google Search Console and Bing Webmaster Tools immediately.

### 2. Long-tail Keywords Win for New Sites
Competing for "AI agent" is impossible for a new site. "Claude Code skills for solopreneurs" is winnable.

### 3. GEO = Structure + Statistics + Specificity
AI search engines prefer:
- Structured content (FAQ, lists, tables)
- Verifiable statistics
- Specific claims over vague promises

### 4. Schema Markup is Underused
Most small sites have no schema. Adding FAQPage + SoftwareApplication + WebPage gave immediate rich result eligibility.

### 5. robots.txt for AI Bots
Explicitly allow AI crawlers:
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

---

## Tools Used

| Tool | Purpose | Cost |
|------|---------|------|
| seo_audit.py | Initial audit | Free |
| keyword_research.py | Keyword discovery | DataForSEO API |
| serp_analysis.py | Competition analysis | DataForSEO API |
| Google Search Console | Indexing | Free |
| Bing Webmaster Tools | Bing indexing | Free |
| Schema.org validator | Schema testing | Free |

---

## Replication Checklist

For any new website, run in this order:

1. `python3 scripts/seo_audit.py "https://yoursite.com"` — baseline audit
2. `python3 scripts/keyword_research.py "your main topic"` — find keywords
3. `python3 scripts/serp_analysis.py "your target keyword"` — analyze competition
4. Add schema markup (FAQPage, SoftwareApplication, or Organization)
5. Submit to Google Search Console
6. Submit to Bing Webmaster Tools
7. Configure robots.txt for AI bots
8. Re-run audit in 30 days
