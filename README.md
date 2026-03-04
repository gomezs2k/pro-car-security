# Pro Car Security - Next.js 14 Website

A complete, professional website for Pro Car Security built with Next.js 14, React, TypeScript, Tailwind CSS, and Prisma.

## Project Overview

This is a fully functional car security services website featuring:
- Professional landing page with hero section
- Services showcase and detail pages
- Dynamic pricing page with comparison table
- Installation gallery with filter functionality
- Customer reviews section with ratings
- About & contact page
- Quote request form with database integration
- AI Assistant chatbot
- Responsive design for mobile and desktop
- Dark theme with brand colors (blue, red, dark gray)

## Features

### Pages
- **Home (`/`)** - Landing page with hero, services preview, reviews, and CTAs
- **Services (`/services`)** - Grid of all services offered
- **Smart Alarm Detail (`/services/alarm`)** - Detailed service page with features, FAQ, and pricing
- **Pricing (`/pricing`)** - Pricing packages with comparison table
- **Gallery (`/gallery`)** - Photo grid with category filters
- **Reviews (`/reviews`)** - Customer testimonials with ratings and breakdown
- **About (`/about`)** - Company story, team, and contact information
- **Quote (`/quote`)** - Multi-step quote form with vehicle info and services selection
- **AI Assistant (`/ai-assistant`)** - Interactive chatbot for answering questions

### API Routes
- `POST /api/quotes` - Submit quote requests to database
- `GET /api/quotes` - Retrieve all quotes
- `GET /api/reviews` - Get customer reviews
- `POST /api/appointments` - Book appointments
- `GET /api/appointments` - Retrieve appointments

### Database Models
- **Quote** - Store customer quote requests
- **Review** - Store customer reviews
- **Appointment** - Store booking appointments

### Components
- **Header** - Sticky navigation with mobile menu
- **Footer** - Links, contact info, and social
- Responsive grid layouts
- Interactive form components
- FAQ accordion sections

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Database**: PostgreSQL with Prisma ORM
- **Images**: Next.js Image component with external domain support
- **Forms**: React hooks for form handling
- **Deployment Ready**: Optimized production build

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (optional - API routes have fallback mock data)

### Installation

```bash
# Install dependencies
npm install

# Create .env file with database URL
cp .env.example .env
# Update DATABASE_URL in .env if using database

# Generate Prisma client
npx prisma generate

# (Optional) Push schema to database
npx prisma db push
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
pro-car-security/
├── app/
│   ├── api/
│   │   ├── appointments/
│   │   ├── quotes/
│   │   └── reviews/
│   ├── services/
│   │   └── alarm/
│   ├── about/
│   ├── ai-assistant/
│   ├── gallery/
│   ├── pricing/
│   ├── quote/
│   ├── reviews/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (home)
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── db.ts (Prisma client)
├── prisma/
│   └── schema.prisma
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Brand Colors

- **Pro Blue** (`#1e40af`) - Primary color for CTA buttons and accents
- **Pro Red** (`#dc2626`) - Secondary color for highlights
- **Pro Dark** (`#1f2937`) - Text and backgrounds
- **Pro Gray** (`#6b7280`) - Body text and descriptions

## Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly buttons and forms

### SEO Optimized
- Meta tags in layout
- Proper heading hierarchy
- Semantic HTML
- Open Graph tags

### Performance
- Static page pre-rendering
- Image optimization with Next.js Image
- Code splitting
- Production build: ~88-101 kB First Load JS

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

### Interactive Elements
- Mobile navigation menu with state management
- FAQ accordion with expand/collapse
- Gallery filter tabs
- Form validation and submission
- AI Assistant chatbot

## Business Information

- **Name**: Pro Car Security
- **Phone**: (613) 820-0004
- **Hours**: Mon-Fri 9AM-6PM, Sat 9AM-4PM
- **Location**: Ottawa, ON
- **Service**: Mobile service available
- **Rating**: 4.9/5 (127 reviews)
- **Experience**: 10+ years

## Packages & Pricing

1. **Essential** - $599
   - Basic car alarm
   - Mobile alerts
   - Basic remote start
   - 1-year warranty

2. **Smart Pro** - $899 (Most Popular)
   - Smart alarm with app
   - GPS tracking
   - Premium remote start
   - Dash cam integration
   - 2-year warranty

3. **Complete** - $1,299
   - Complete smart alarm
   - Advanced GPS tracking
   - Premium remote start
   - Dual dash cam system
   - Window tinting included
   - Lifetime warranty

## Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'pro-blue': '#1e40af',
  'pro-red': '#dc2626',
  'pro-dark': '#1f2937',
  'pro-gray': '#6b7280',
}
```

### Update Business Info
Edit the relevant pages to change:
- Phone number
- Hours of operation
- Location
- Services offered
- Pricing

### Add Database Connection
1. Set up PostgreSQL database
2. Update `DATABASE_URL` in `.env`
3. Run `npx prisma db push`
4. API routes will automatically use database

## Database Setup (Optional)

If you want to use the database:

```bash
# Using PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/pro_car_security"

# Push schema to database
npx prisma db push

# Open Prisma Studio
npx prisma studio
```

## API Integration

### Quote Submission
```javascript
const response = await fetch('/api/quotes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    phone: '(613) 000-0000',
    email: 'john@example.com',
    vehicle: '2023 Toyota Camry',
    services: ['alarm', 'remote-start'],
    selectedPackage: 'smart-pro',
    message: 'I need installation for my vehicle'
  })
})
```

## Deployment

### Vercel (Recommended for Next.js)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- Docker deployment supported
- Environment variables need to be set
- PostgreSQL database recommended for production

## License

This project is proprietary to Pro Car Security.

## Support

For questions or issues:
- Phone: (613) 820-0004
- Email: Contact through website form
- Hours: Mon-Fri 9AM-6PM, Sat 9AM-4PM

---

Built with Next.js 14, React, TypeScript, and Tailwind CSS
