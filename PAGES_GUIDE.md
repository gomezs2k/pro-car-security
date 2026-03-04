# Pro Car Security - Pages Guide

## Complete Page Inventory

### 1. Home Page (`/`)
**File**: `app/page.tsx`

Features:
- Hero section with gradient background and logo
- Trust signals: 4.9/5 rating, Licensed & Insured, 10+ years
- CTA buttons: Call Now, Get Quote, Learn More
- Services highlight grid (4 cards)
- Why Choose Us section (3 cards)
- Reviews preview (3 sample reviews)
- CTA banner with action buttons

Visual Elements:
- Gradient background (pro-dark to pro-blue)
- Service icons (🚨, 🔄, 📹, 🛰️)
- Rating display with badge
- Responsive grid layouts
- Call-to-action buttons throughout

### 2. Services Page (`/services`)
**File**: `app/services/page.tsx`

Features:
- Hero section with title and description
- Grid of 8 service cards
- Service descriptions and icons
- Link to detail pages for services
- CTA section with quote button

Services Listed:
1. Smart Alarm System (🚨)
2. Two-Way Alarm (📡)
3. Remote Start Systems (🔄)
4. Premium Remote Start w/ App (📱)
5. Dash Cameras (📹)
6. GPS Tracking (🛰️)
7. Window Tinting (🪟)
8. Accessories (🔧)

### 3. Smart Alarm Detail Page (`/services/alarm`)
**File**: `app/services/alarm/page.tsx`

Features:
- Breadcrumb navigation
- Hero section with title and description
- Service overview with features list
- Key features grid (6 features)
- Pricing tiers section (3 packages)
- FAQ accordion (5 questions with expand/collapse)
- Sidebar booking option
- CTA banner

Features Highlighted:
- Smartphone Integration
- GPS Tracking
- Instant Alerts
- Two-Way Pager
- Shock Sensor
- Remote Start Compatible

FAQ Questions:
1. How does the smartphone app work?
2. Is installation difficult?
3. What if my phone battery dies?
4. Can I upgrade later?
5. What warranty do you offer?

### 4. Pricing Page (`/pricing`)
**File**: `app/pricing/page.tsx`

Features:
- Hero section
- 3 pricing package cards with popular badge on Smart Pro
- Detailed feature lists for each package
- Feature comparison table (10 rows)
- Why pricing is fair section (3 cards)
- CTA with free consultation link

Packages:
1. **Essential** - $599
   - Basic Car Alarm
   - Mobile Alerts
   - Basic Remote Start
   - 1-Year Warranty
   - Professional Installation
   - Email Support

2. **Smart Pro** - $899 (Most Popular)
   - Smart Alarm System with App
   - GPS Tracking (Real-time)
   - Premium Remote Start with App
   - Dash Cam Integration
   - Smartphone Control
   - 2-Year Warranty
   - Professional Installation
   - Priority Email Support

3. **Complete** - $1,299
   - Complete Smart Alarm System
   - Advanced GPS Tracking
   - Premium Remote Start
   - Dual Dash Cam System
   - Window Tinting (Included)
   - Full Smartphone Control
   - Lifetime Warranty
   - Professional Installation
   - Priority Phone & Email Support

Comparison Table Features:
- Car Alarm
- Smartphone App
- GPS Tracking
- Remote Start
- Dash Cam
- Window Tinting
- Mobile Alerts
- Warranty Period
- Installation
- Support

### 5. Gallery Page (`/gallery`)
**File**: `app/gallery/page.tsx`

Features:
- Hero section
- Filter tabs (5 categories):
  - All
  - Alarms
  - Remote Start
  - Dash Cams
  - Window Tinting
- Photo grid (12 images from Unsplash)
- Hover effects with image labels
- CTA section

Gallery Layout:
- Responsive 4-column grid on desktop
- 2-column on tablet
- 1-column on mobile
- Images from unsplash.com with alt text

### 6. Reviews Page (`/reviews`)
**File**: `app/reviews/page.tsx`

Features:
- Overall rating display (4.9/5 with stars)
- Star rating breakdown with percentage bars
- 6 review cards (name, stars, date, text)
- Google review link
- Testimonial banner quote
- CTA section

Reviews Included:
1. Michael Thompson (Jan 2026)
2. Sarah Chen (Dec 2025)
3. David Martin (Nov 2025)
4. Jennifer Walsh (Oct 2025)
5. Robert Kim (Sept 2025)
6. Amanda Foster (Aug 2025)

Star Breakdown:
- 5 stars: 127 reviews (98%)
- 4 stars: 2 reviews (2%)
- 3-1 stars: 0 reviews (0%)

### 7. About Page (`/about`)
**File**: `app/about/page.tsx`

Sections:
- Hero section
- Company story (2 paragraphs)
- Why Choose Us cards (4 items)
- Team section (3 team members with roles)
- Business info cards (Phone, Location, Hours, Rating)
- Contact form with fields
- Contact information list
- CTA section

Team Members:
- Lead Technician (15+ years)
- Service Manager (10+ years)
- Installation Expert (12+ years)

Business Hours:
- Mon-Fri: 9AM-6PM
- Sat: 9AM-4PM
- Closed: Sunday

Contact Methods:
- Phone: (613) 820-0004
- Email: Via form
- Location: Ottawa, ON

### 8. Quote Request Page (`/quote`)
**File**: `app/quote/page.tsx`

Form Sections:

**Section 1: Choose Package (Radio Buttons)**
- Essential - $599
- Smart Pro - $899 (Pre-selected)
- Complete - $1,299

**Section 2: Vehicle Information**
- Year dropdown (last 30 years)
- Make text input
- Model text input

**Section 3: Additional Services (Checkboxes)**
- Car Alarm
- Remote Start
- Dash Cam
- GPS Tracking
- Window Tinting

**Section 4: Contact Information**
- Full Name (required)
- Phone (required)
- Email (required)

**Section 5: Message**
- Text area for additional info

Features:
- Form validation
- POST to `/api/quotes`
- Success message display
- Form reset on success
- Mock response if database unavailable
- Why section with 3 benefits

### 9. AI Assistant Page (`/ai-assistant`)
**File**: `app/ai-assistant/page.tsx`

Features:
- Chat message interface
- Message history display
- User and assistant messages (different colors)
- Loading animation with bouncing dots
- Message input field
- Send button
- Quick question buttons (4 options)

Quick Questions:
1. "What security package is right for me?"
2. "How much does installation cost?"
3. "Do you offer mobile service?"
4. "What is your warranty policy?"

Knowledge Base Responses:
- Package recommendations
- Pricing information
- Service details
- Warranty information
- Installation details
- Vehicle types

AI Features:
- Keyword matching for responses
- Knowledge base of 7+ common questions
- Fallback response for unknown questions
- Phone contact suggestion
- Consultation booking CTA

---

## Navigation Structure

```
Home (/)
├── Services (/services)
│   └── Smart Alarm Detail (/services/alarm)
├── Pricing (/pricing)
├── Gallery (/gallery)
├── Reviews (/reviews)
├── About (/about)
├── Quote (/quote)
└── AI Assistant (/ai-assistant)
```

## All CTAs (Call-to-Action)

**Primary CTAs** (Red Button):
- "Get Free Quote"
- "Get a Quote"
- "Book Appointment"
- "Call Now"

**Secondary CTAs** (Blue Button):
- "Call (613) 820-0004"
- "Get Started"
- "Learn More"
- "Schedule Consultation"

**Link CTAs**:
- "View All Services"
- "View All Reviews"
- "Leave a Google Review"
- "Learn More →"

## Color Usage

**Pro Blue (#1e40af)**
- Primary buttons
- Links and hover states
- Accent borders
- Highlight boxes

**Pro Red (#dc2626)**
- Secondary buttons
- "Popular" badges
- Rating displays
- Important highlights

**Pro Dark (#1f2937)**
- Headings
- Body text
- Dark backgrounds
- Navigation bars

**Pro Gray (#6b7280)**
- Description text
- Secondary text
- Icons in some sections
- Borders

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive with:
- Single column on mobile
- 2-3 columns on tablet
- Full grid layout on desktop
- Touch-friendly buttons and spacing

---

**Total Pages**: 9
**Total API Routes**: 3
**Total Components**: 2
**Total Sections**: 30+
**Total CTAs**: 20+
