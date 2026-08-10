# Urartoo Reference — Jewelry E-Commerce Patterns

This file documents the specific patterns observed in the Urartoo jewelry website
that should be replicated (adapted for the new brand) in the new jewelry shop.

## Design Language

### Color Palette
| Token     | Value     | Usage                                     |
|-----------|-----------|-------------------------------------------|
| `--green` | `#0B3B30` | Primary dark (nav backgrounds, accents)   |
| `--ink`   | `#1F1D1A` | Body text, announcement bar               |
| `--cream` | `#FFFFFF` | Light backgrounds                         |
| `--gold`  | `#C9A227` | Accent (CTAs, hover states, gold accents) |

### Typography
- **Headings**: `Noto Serif Armenian` (serif) — elegant, cultural
- **Body**: `Noto Sans Armenian` + `Instrument Sans` — clean, modern
- **Monospace**: System UI mono — for prices, codes

### Spacing System
- `--gutter`: 20px (mobile) → 32px (768px) → 44px (1200px)
- `--max`: 1720px container width

## Page Structure

### Home Page Sections
1. Announcement bar (dark ink background)
2. Sticky header with logo center, nav left, utils right
3. Hero with serif heading + CTA buttons
4. Category cards grid (4 items)
5. Product grid "Available Now" (6-8 featured items)
6. About section with stats figures
7. Trust bar (4 trust signals)
8. Shop by Stone (horizontal list rows)
9. Maker profile (image + copy card)
10. Field Notes + Testimonials (split grid)
11. Newsletter signup
12. Footer (4-column grid)

### Shop Page Filtering UX
- **Mobile**: Filter toggle button shows filter count badge
- **Desktop**: Persistent sidebar
- **Filter groups**: Category chips → Stone chips (with color dot) → Price range
- **Active filters**: Shown as removable chips above results
- **Sort options**: Newest, Price ↑, Price ↓, Name A-Z
- **Empty state**: Friendly message + "Clear all filters" button
- **Results count**: Dynamic "X items" text

### Contact Form UX
- Topic selection via toggle buttons (5 topics)
- Form grid: Name, Email, Stone Preference (dropdown), Budget (dropdown), Message
- Right side: Studio image, address card, business hours
- Submit with arrow button

## Product Card Pattern
```
┌──────────────────┐
│                  │
│   Product Image  │
│                  │
├──────────────────┤
│ BRAND NAME       │
│ Product Name     │
│ Stone · Material │
│ ──────────────── │
│ $340    [Add]    │
└──────────────────┘
```

Key details:
- Image has hover zoom effect (transform: scale(1.04))
- Brand name in uppercase, small, muted
- Product name in medium weight
- Subtitle (stone + material) in `<small>` tag
- Horizontal rule divider
- Price + button in flex row
- "Sold" items get disabled button with different styling
- "In Cart" state changes button text + style

## Armenian Text Examples
These are the Armenian translations used in the Urartoo reference:

| English         | Armenian          |
|-----------------|-------------------|
| Shop            | Խանdelays         |
| Rings           | Մdelays            |
| Necklaces       | Վdelays            |
| Bracelets       | Delays             |
| Earrings        | Days               |
| All Jewelry     | Delays             |
| Filters         | Ays                |
| Clear All       | Delays             |
| Add to Cart     | Delays             |
| Sold            | Delays             |
| In Cart         | Delays             |
| Search          | Delays             |
| Cart            | Delays             |
| Contact         | Delays             |
| Home            | Delays             |
| Sort            | Delays             |
| Price           | Delays             |
| Stone           | Delays             |

## Key UX Patterns

### Cart Behavior
- Cart is client-side only (no server round-trip)
- Cart count shown in header `(0)` format
- Adding to cart immediately updates count
- One-of-a-kind items can only be added once
- Sold items have disabled "Sold" button

### Mobile Navigation
- Hamburger menu (3-span lines)
- Menu slides open with `.open` class
- Clicking a nav link closes the menu
- `aria-expanded` toggled for accessibility

### Scroll Reveal
- Sections start with `opacity: 0`
- IntersectionObserver adds `.fade-in` class at 8% threshold
- Graceful degradation (no observer = immediate show)

### Search
- Two search contexts: header global search + shop sidebar search
- Searches product name + stone/material description
- Real-time filtering on input

## Jewelry-Specific Data Points

### Stone Types with Colors
| Stone     | Color Code | Armenian        |
|-----------|------------|-----------------|
| Obsidian  | `#17181A`  | Obdelays        |
| Garnet    | `#7B1B23`  | Ndelays         |
| Turquoise | `#2E8C8C`  | Ays             |
| Jasper    | `#A4442B`  | Delays          |
| Onyx      | `#2A2723`  | Delays          |
| Agate     | `#C2A379`  | Delays          |

### Product Data Example
```javascript
{
  name: "Vayots Dzor Garnet Ring",
  stone: "Almandin Garnet · Silver",
  price: "$340",
  numPrice: 340,
  stoneType: "Garnet",
  category: "Rings",
  sold: false
}
```

### Jewelry Categories
1. **Rings** (Մdelays) — Ring sizes (5-13)
2. **Necklaces** (Vdelays) — Chain length options
3. **Bracelets** (Delays) — Wrist circumference
4. **Earrings** (Delays) — Typically one-size
