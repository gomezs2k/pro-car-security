# Quick Start Guide - Pro Car Security Website

## Get Up and Running in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Start Development Server (30 seconds)

```bash
cd /sessions/charming-friendly-cerf/pro-car-security
npm run dev
```

Open your browser to **http://localhost:3000**

### Step 2: Explore the Website (2 minutes)

Navigate through the menu:
- **Home** - See the landing page with all features
- **Services** - Browse all security services
- **Pricing** - View pricing packages and comparison
- **Gallery** - See installation photos with filters
- **Reviews** - Read customer testimonials
- **About** - Learn about the company
- **Get Quote** - Fill out the quote request form
- **AI Assistant** - Chat with the AI for answers

### Step 3: Test the Form (1 minute)

1. Go to **Get Quote** page
2. Fill out the form:
   - Select a package (Smart Pro is pre-selected)
   - Choose a vehicle year/make/model
   - Check some services
   - Enter your contact info
3. Click "Get Free Quote"
4. See the success message (data saved locally in demo mode)

### Step 4: Test AI Assistant (30 seconds)

1. Go to **AI Assistant** page
2. Click one of the quick questions
3. See instant response from the AI
4. Type your own question
5. Get relevant answers

## Production Build

```bash
npm run build
npm run start
```

## File Structure Quick Reference

```
/app                     - All pages and API routes
  /page.tsx             - Home page
  /services/            - Services pages
  /pricing/             - Pricing page
  /gallery/             - Gallery page
  /reviews/             - Reviews page
  /about/               - About page
  /quote/               - Quote form
  /ai-assistant/        - AI chat
  /api/                 - API endpoints
/components             - Reusable components
  Header.tsx
  Footer.tsx
/lib                    - Utilities and database
  db.ts
/prisma                 - Database schema
```

## Customization Cheat Sheet

### Change Business Phone Number
Search and replace `(613) 820-0004` in:
- `components/Header.tsx`
- `components/Footer.tsx`
- All pages with CTA buttons

### Change Business Hours
Edit in `components/Header.tsx` and `app/about/page.tsx`:
```typescript
⏰ Mon-Fri 9AM-6PM, Sat 9AM-4PM
```

### Change Pricing
Edit `app/pricing/page.tsx` and `app/services/alarm/page.tsx`:
```typescript
const packages = [
  { name: 'Essential', price: '$599', features: [...] },
  { name: 'Smart Pro', price: '$899', features: [...] },
  { name: 'Complete', price: '$1,299', features: [...] },
]
```

### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'pro-blue': '#1e40af',      // Change this
  'pro-red': '#dc2626',       // Change this
  'pro-dark': '#1f2937',      // Change this
  'pro-gray': '#6b7280',      // Change this
}
```

### Change Logo
Edit logo URL in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`

Replace the image URL:
```typescript
src="https://images.squarespace-cdn.com/content/v1/677e6e560ce5df0cab1923a7/43faacd2-f2ac-4db5-837f-748a419d8910/ChatGPT+Image+Feb+5%2C+2026%2C+07_22_16+AM.png?format=1500w"
```

### Enable Database

1. **Set up PostgreSQL database** (local or cloud)

2. **Create `.env` file** with:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/pro_car_security"
   ```

3. **Push schema to database**:
   ```bash
   npx prisma db push
   ```

4. **View database** (optional):
   ```bash
   npx prisma studio
   ```

## Key Features

✅ **9 Complete Pages** - All fully designed and functional
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Interactive Forms** - Quote form with validation
✅ **AI Assistant** - Chatbot with knowledge base
✅ **Gallery** - Photo grid with category filters
✅ **Reviews** - Customer testimonials with ratings
✅ **API Routes** - Ready for database or mock data
✅ **TypeScript** - Full type safety
✅ **Tailwind CSS** - Professional styling with brand colors
✅ **SEO Optimized** - Meta tags and structured data

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Database Connection Errors
- API routes have fallback mock data
- You don't need a database to run the site
- Add `DATABASE_URL` to `.env` when you want to use it

## Next Steps

1. **Customize Content**
   - Update business information
   - Add your own photos
   - Modify pricing and services

2. **Deploy**
   - Vercel (recommended): `vercel`
   - Other platforms: See README.md

3. **Database** (Optional)
   - Set up PostgreSQL
   - Add DATABASE_URL to environment
   - Quotes will be saved automatically

4. **Analytics**
   - Add Google Analytics
   - Set up conversion tracking

5. **Email Integration**
   - Add transactional emails for form submissions
   - Send notifications to admin

## Commands Reference

```bash
# Development
npm run dev              # Start dev server on :3000

# Production
npm run build            # Create production build
npm run start            # Start production server
npm run lint             # Run linter

# Database
npx prisma generate      # Generate Prisma client
npx prisma db push       # Sync schema with database
npx prisma studio        # Open database GUI
```

## Support

- Website: See About page or call (613) 820-0004
- Documentation: Read README.md and PAGES_GUIDE.md
- Issues: Check console for error messages

---

**You're all set!** Your Pro Car Security website is ready to go.
Visit http://localhost:3000 to see it in action.
