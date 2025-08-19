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

### ✅ **INTERACTIVE PEDIGREE ENHANCEMENTS** (January 2025)
- Updated pedigree displays to show photos only when dog names are clicked
- Removed automatic photo display from pedigree overview sections (converted to plain text)
- Added new Grizzly outdoor photo to "View Full Pedigree" popup dialog
- Made main dog names clickable in pedigree popups for larger image viewing
- Enhanced breeding dog cards with reorganized layout: removed star sections, moved pedigree content to "Pedigree Highlight"
- Added clickable Westminster lineage reference for Grizzly showing Shalimar's The Animator photo
- Maintained consistent golden color styling and hover effects for all interactive elements

### ✅ **HUBSPOT FORM INTEGRATION** (January 2025)
- Replaced custom React inquiry form with embedded HubSpot form integration
- Added TypeScript declarations for HubSpot window object for proper type safety
- Configured form with portal ID "44843117" and form ID "d548d593-9ea1-46d6-99d5-6ab48bf9f956"
- Added custom CSS styling to match site design with brand colors and fonts
- Maintained consistent styling with existing contact page layout and professional appearance

### ✅ **PUPPY GALLERY EXPANSION & OPTIMIZATION** (January 2025)
- Enhanced "Generations of Excellence" gallery from 8 to 15 curated puppy photos
- Added diverse puppy portraits showcasing full color spectrum: blacks, goldens, whites, chocolates, fox reds, and unique saddle markings
- Implemented strategic color distribution to prevent color clustering and create visual variety
- Featured professional photography with consistent toy interactions demonstrating natural retrieving instincts
- Maintained interactive hover effects and popup functionality for enhanced user engagement

### ✅ **GALLERY LAYOUT OPTIMIZATION** (January 2025)
- Converted gallery to full-width seamless presentation touching navigation
- Removed all spacing and gaps between photos for continuous visual flow
- Eliminated rounded corners to create perfect edge-to-edge connections
- Repositioned title below gallery for maximum photo impact at page top
- Enhanced visual hierarchy with gallery-first, title-second layout structure

### ✅ **PEDIGREE SYSTEM INTEGRATION** (January 2025)
- Successfully integrated complete pedigree data system into litter pages
- Added Harper Lee pedigree data with authentic champion bloodlines to match Moon's existing data
- Implemented traditional tree-style pedigree layout with connecting lines and absolute positioning
- Created comprehensive pedigree lookup function supporting both sires and dames
- Added clickable dog names and champion titles for enhanced user interaction
- Fixed all missing image imports and compilation issues for seamless functionality