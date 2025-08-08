# On The Bluff Labradors - Replit Project Guide

## Overview
This project is a full-stack web application for "On The Bluff Labradors," a professional dog breeding business. It serves as a comprehensive business website with inquiry submission functionality, aiming to provide a professional online presence for a luxury dog breeding operation. Key capabilities include displaying breeding information, managing customer inquiries, showcasing dog pedigrees, and presenting available puppies through interactive galleries. The business vision is to highlight authentic bloodlines and professional breeding practices, attracting discerning clients.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **Design System**: Custom color palette, responsive design (mobile-first), Google Fonts (Playfair Display, Source Sans Pro, Montserrat), consistent spacing.
- **UI/UX Decisions**: Sticky navigation, modular sections, professional styling with enhanced shadows and rounded corners, brand-consistent color schemes (olive green for badges and buttons), interactive elements like clickable names for pedigree images, and photo carousels for litter cards.

### Backend
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API design
- **Session Management**: Express sessions with PostgreSQL store
- **Storage**: DatabaseStorage implementation
- **Validation**: Zod schemas for request validation

### Key Components & Technical Implementations
- **Database Layer**: Drizzle ORM for type-safe operations; `users` and `inquiries` tables.
- **API Layer**: RESTful endpoints (e.g., `POST /api/inquiries`, `GET /api/inquiries`).
- **Frontend Components**: Navigation, modular page sections, contact forms, reusable UI components.
- **Data Flow**: React frontend -> React Hook Form/Zod validation -> TanStack Query API calls -> Express backend -> Drizzle ORM -> PostgreSQL.
- **Admin System**: Secure authentication with bcrypt, admin dashboard for inquiries, session management.
- **Business Logic**: Professional dog breeding presentation, customer inquiry system with preferred color selection, testimonials, facility showcase, health testing/certification info, pedigree displays (up to 3 generations), and interactive puppy galleries.
- **Technical Considerations**: Type safety (frontend/backend shared types), error handling, performance optimization, SEO-friendly structure.
- **Deployment Strategy**: Vite for frontend build, ESBuild for backend bundling; uses helper scripts for file structuring post-build.

## External Dependencies

### Core Dependencies
- `@neondatabase/serverless`: Serverless PostgreSQL client
- `@radix-ui/*`: Headless UI components
- `@tanstack/react-query`: Server state management
- `drizzle-orm`: Type-safe ORM
- `react-hook-form`: Form handling
- `zod`: Schema validation
- `tailwindcss`: Utility-first CSS framework

### Development Tools
- `Vite`: Build tool and development server
- `TypeScript`: Type safety
- `ESBuild`: Production bundling
- `PostCSS`: CSS processing

## Recent Changes (January 2025)

### ✅ **SITE STRUCTURE REFACTOR**: Converted single-page site to multi-page architecture
- Created separate page components for each major section (About, Puppies, Breeding Dogs, Health Testing, Training, Boarding, Facilities, Contact)
- Updated routing system to use proper page navigation instead of scroll-to-section
- Converted navigation from anchor links to wouter Link components for proper page routing
- Maintained hero section as homepage with clean navigation to dedicated pages
- Enhanced user experience with dedicated pages for focused content consumption

### ✅ **PEDIGREE VISUAL ENHANCEMENT**: Enhanced pedigree image display
- Updated pedigree images to larger rectangular format (96×80px for parents, 80×64px for grandparents)
- Photos appear above names in all pedigree generations for dogs with available images
- Maintained existing clickable name functionality while adding visual photo elements
- Enhanced pedigree presentation with authentic dog portraits for better user engagement

### ✅ **PUPPY GALLERY SYSTEM**: Added interactive puppy galleries
- Created "Puppies by [Name]" buttons to stud cards with comprehensive puppy gallery
- Built responsive grid layout showing individual puppies with litter information
- Added comprehensive puppy data with birth dates, dam names, and individual puppy portraits
- Applied professional styling with hover effects and brand-consistent olive green buttons

### ✅ **HERO SECTION ENHANCEMENT**: Updated hero background image and layout
- Updated hero background with scenic Labrador portrait featuring mountain vista backdrop
- Optimized image positioning (center 10%) for perfect alignment with title text
- Added Welcome section below hero with business heritage and three value propositions
- Enhanced brand identity with "On The Bluff" mountain setting imagery
- Maintained professional styling and responsive design

### ✅ **TYPOGRAPHY CONSISTENCY & TESTIMONIAL IMPROVEMENTS** (January 2025)
- Updated footer fonts to match site-wide typography system (Oswald for headings, Source Sans Pro for body text)
- Rearranged testimonial cards with Frankie's story on left, Duke & Atlas on right
- Added logical paragraph breaks to all testimonials for improved readability
- Removed quotation marks for cleaner, more professional presentation
- Enhanced testimonial text rendering with proper paragraph spacing while maintaining expand/collapse functionality