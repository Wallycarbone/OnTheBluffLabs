# On The Bluff Labradors - Replit Project Guide

## Overview

This is a full-stack web application for "On The Bluff Labradors," a professional dog breeding business. The application serves as a business website with inquiry submission functionality, built using a modern React frontend with an Express.js backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API design
- **Session Management**: Express sessions with PostgreSQL store
- **Storage**: DatabaseStorage implementation with live PostgreSQL connection

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Located in `shared/schema.ts` with two main tables:
  - `users`: User authentication (id, username, password)
  - `inquiries`: Customer inquiries (contact info, preferences, messages)
- **Migrations**: Managed through Drizzle Kit

### API Layer
- **Routes**: RESTful endpoints in `server/routes.ts`
  - `POST /api/inquiries`: Create new inquiry
  - `GET /api/inquiries`: Retrieve all inquiries
- **Storage**: Abstracted storage interface with memory-based implementation
- **Validation**: Zod schemas for request validation

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Sections**: Modular components for different page sections
- **Forms**: Contact form with validation and submission handling
- **UI Library**: Comprehensive set of reusable UI components

## Data Flow

1. **User Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact forms use React Hook Form with Zod validation
3. **API Calls**: TanStack Query manages API requests to Express backend
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response Handling**: Success/error states managed through React Query and toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **@radix-ui/***: Headless UI components
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety
- **ESBuild**: Production bundling
- **PostCSS**: CSS processing

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: Vite dev server with Express API
- **Database**: PostgreSQL with DatabaseStorage implementation
- **Hot Reload**: Enabled for both frontend and backend

### Production
- **Build Process**: 
  1. Vite builds React frontend to `dist/public`
  2. ESBuild bundles Express server to `dist/index.js`
  3. **Deployment Fix**: Run `node fix-deployment.js` to move files from `dist/public/` to `dist/`
- **Start Command**: `npm start` (full-stack) or `node simple-express-server.js` (static-only)
- **Database**: PostgreSQL via Neon Database
- **Environment**: Requires `DATABASE_URL` environment variable
- **Deployment Ready**: Use `node fix-deployment-quick.js` for complete build and deployment preparation

### Deployment Scripts
- `fix-deployment.js`: Moves built files from `dist/public/` to `dist/` for deployment compatibility
- `fix-deployment-quick.js`: Complete deployment preparation (build + fix structure)
- `deploy-helper.js`: Enhanced to include deployment structure fixing

### Key Configuration Files
- `vite.config.ts`: Frontend build configuration
- `drizzle.config.ts`: Database configuration
- `tailwind.config.ts`: Styling configuration
- `tsconfig.json`: TypeScript configuration

## Notable Features

### Design System
- Custom color palette with CSS variables
- Responsive design with mobile-first approach
- Typography using Google Fonts (Playfair Display, Source Sans Pro, Montserrat)
- Consistent spacing and component styling

### Business Logic
- Professional dog breeding business presentation
- Customer inquiry system with preferred color selection
- Testimonials and facility showcase
- Health testing and certification information

### Admin System
- Secure admin authentication with bcrypt password hashing
- Admin dashboard for viewing customer inquiries
- Login system with external access support
- Session management with local storage

### Technical Considerations
- Type safety throughout the application
- Shared types between frontend and backend
- Error handling and validation
- Performance optimization with React Query
- SEO-friendly structure
- Database integration with PostgreSQL via Neon
- Working authentication system confirmed functional

## Recent Changes (July 28, 2025)
- ✅ **PEDIGREE SYSTEM EXPANSION**: Extended pedigree display from 3 to 4 generations
  - Added great-grandparent information to all breeding dogs (Moon, Grizzly, Harper Lee, Foxxy, Nora, Guinevere)
  - Extended all litter pedigrees to include 4th generation ancestry
  - Maintained authentic bloodline information while providing deeper genealogical detail
  - Updated both individual dog pedigrees (breeding-dogs.tsx) and litter pedigrees (puppies.tsx)
- ✅ **DATA ACCURACY CORRECTIONS**: Updated Grizzly's pedigree information
  - Corrected Grizzly's sire name to "Greenstone Chocoholic at Loretta" throughout all references
  - Enhanced Grizzly's bloodline descriptions with authentic field and hunting titles
  - Maintained champion and field title designations (JH, SHR, LIT) for breeding integrity
- ✅ **PRIVACY COMPLIANCE**: Removed all pedigree registration numbers from display
  - Eliminated AKC registration numbers from public pedigree displays
  - Maintained data structure integrity while ensuring privacy compliance
  - Preserved authentic titles and bloodline information for breeding transparency
- ✅ **BOSCO INTEGRATION**: Added Bosco (Grizzly's sire) with proper display hierarchy
  - Integrated Bosco image (Bosco_1753735317643.avif) into pedigree displays
  - Shows as "Greenstone Chocoholic at Loretta (\"Bosco\")" in Grizzly's lineage only
  - Removed from main breeding dogs section, appears only in pedigree information
  - Implemented clickable name system: names with images are underlined and clickable
  - Added image popup dialogs that open when users click on dog names with available photos
  - Enhanced user experience with clean pedigree display and on-demand image viewing
  - Formatted name with formal name first, nickname in parentheses with quotation marks
- ✅ **CLICKABLE TITLE BADGES**: Implemented interactive title system for pedigree displays
  - Updated Bosco's titles to include "MX" (Master Agility Excellent) badge
  - Made all title badges clickable with hover effects and popup explanations
  - Added title popup dialogs showing full title meanings (e.g., "MX" shows "Master Agility Excellent")
  - Enhanced user education about breeding titles and achievements
- ✅ **HANNAH IMAGE INTEGRATION**: Added Hannah's photo to pedigree system
  - Integrated Hannah image (Hannah_1753736053468.png) into both breeding dog and litter pedigrees
  - Hannah (Endless Mt Hannah) now appears as clickable name with image popup in Grizzly's lineage
  - Enhanced visual storytelling with authentic dam portrait showing field training background
  - Removed title badges for Hannah and Grizzly per user request for cleaner display
- ✅ **PEDIGREE EXPANSION**: Extended Grizzly's pedigree to 5 generations
  - Added great-great-grandparent information to Grizzly's complete lineage
  - Extended both sire (Bosco) and dam (Hannah) lines to show 5th generation ancestry
  - Enhanced genealogical depth with Thunder's lineage, Loretta's lineage, and Hannah's complete ancestry
  - Maintained authentic bloodline structure while providing comprehensive breeding history
  - Redesigned pedigree popup display to show complete 5-generation family tree visualization
  - Created responsive grid layout scaling from prominent parent cards to compact great-great-grandparent cards
  - Removed redundant subject card from pedigree display for cleaner genealogy focus
- ✅ **PEDIGREE RESTRUCTURE**: Moved Cyrus from Hannah's dam to Bosco's sire position
  - Relocated "Shalimar's The Animator (\"Cyrus\")" from Hannah's maternal lineage to Bosco's paternal lineage
  - Updated pedigree structure so Cyrus appears as Bosco's father rather than Hannah's mother
  - Maintained authentic breeding information with "CH" and "MBISS" titles
  - Preserved clickable image functionality for Cyrus in new position
  - Applied consistent restructuring across both individual and litter pedigree displays
  - Replaced previous "Chocolate Thunder" placeholder with authentic Cyrus lineage data
  - Updated Cyrus image to use latest portrait (cyrusHeadL (1)_1753810280559.png)
- ✅ **BOSCO PEDIGREE UPDATE**: Updated Bosco's dam information with authentic breeding data
  - Changed "Loretta's Dam" to "Greenstone's Special Blend ('Simmer')" in both breeding-dogs.tsx and puppies.tsx
  - Maintained CH title designation for Simmer
  - Enhanced Bosco's complete lineage with authentic maternal bloodline information
- ✅ **SIMMER IMAGE INTEGRATION**: Added Simmer's photo to pedigree system
  - Integrated Simmer image (Simmer_1753810570980.avif) into both breeding dog and litter pedigrees
  - Simmer now appears as clickable name with image popup in Bosco's dam lineage
  - Enhanced Bosco's complete maternal bloodline with authentic portrait
  - Displays CH title for Simmer's breeding achievements (JH badge removed per user request)
  - Enhanced Generation 3 pedigree rendering to support clickable names for dogs with images
  - Simmer's name now appears as underlined clickable link that opens her portrait in popup dialog
- ✅ **HANNAH'S SIRE UPDATE**: Updated Hannah's sire with authentic breeding information
  - Changed "Hannah's Sire" to "Endless Mountain's Second Son ('Brody')" in both components
  - Maintained CH and FC title designations for Brody's achievements
  - Enhanced Hannah's complete paternal lineage with authentic bloodline information
- ✅ **HANNAH'S NAME UPDATE**: Updated Hannah's formal name for consistency
  - Changed "Endless Mt Hannah" to "Endless Mountain's Hannah" in both components
  - Maintained authentic kennel naming conventions throughout pedigree displays
- ✅ **BRODY IMAGE INTEGRATION**: Added Brody's photo to pedigree system
  - Integrated Brody image (Brody_1753811205545.jpg) into both breeding dog and litter pedigrees
  - Brody now appears as clickable name with image popup in Hannah's sire lineage
  - Enhanced Hannah's complete paternal bloodline with authentic portrait
  - Added clickable functionality for Generation 3 Dam's Sire position in pedigree display
  - Removed CH and FC title badges from Brody per user request for cleaner display
- ✅ **HANNAH'S DAM UPDATE**: Updated Hannah's dam with authentic breeding information
  - Changed "Hannah's Dam" to "Endless Mountain's Georgia On My Mind" in both components
  - Maintained CH and JH title designations for Georgia's achievements
  - Enhanced Hannah's complete maternal lineage with authentic bloodline information
  - Removed CH and JH title badges from Georgia per user request for cleaner display
- ✅ **CYRUS TITLE ENHANCEMENT**: Added Grand Champion (GCH) badge to Cyrus
  - Added GCH title to Shalimar's The Animator ("Cyrus") in both components
  - Updated title mapping to include "GCH": "Grand Champion" for educational popups
  - Enhanced Cyrus's title display to show complete achievement recognition
- ✅ **PEDIGREE TEXT ALIGNMENT**: Centered all names in pedigree displays
  - Added text-center class to all pedigree name headers in both components
  - Ensured consistent centering whether names have clickable links or not
  - Applied to all generation levels (2nd, 3rd, and 4th generation) for uniform presentation
- ✅ **BOSCO IMAGE UPDATE**: Updated Bosco's photo to new portrait
  - Changed from Bosco_1753735317643.avif to bosco1_1753815440343.avif in both components
  - Updated image imports to use the latest Bosco portrait for pedigree displays
  - Maintained clickable image functionality for Bosco in Grizzly's lineage
- ✅ **CYRUS IMAGE UPDATE**: Updated Cyrus's photo to new full-body portrait
  - Changed from cyrusHeadL (1)_1753810280559.png to CyrusBodyL (1)_1753815517271.jpg in both components
  - Updated Shalimar's The Animator image to show complete conformation view
  - Enhanced visual presentation with professional full-body portrait in pedigree displays

## Previous Changes (July 26, 2025)
- ✅ **DEPLOYMENT FIX**: Resolved file structure issue for deployment compatibility
  - Created `fix-deployment.js` script to move files from `dist/public/` to `dist/`
  - Updated `simple-express-server.js` to serve from correct `dist/` directory
  - Enhanced `deploy-helper.js` to automatically fix deployment structure
  - Added `fix-deployment-quick.js` for one-command deployment preparation
- ✅ Premium litter card redesign with enhanced visual appeal and professional layout
- ✅ Brand-consistent status badges using olive green color variations (#6d761d, #8a8f28, #a5aa35)
- ✅ Dynamic litter status system (Ready/Ready Soon/Upcoming) based on puppy age calculations
- ✅ Interactive Westminster bloodline popup featuring authentic Topo Gigio photo
- ✅ Clickable "Topo Gigio" links for Moon bloodline litters with professional popup dialog
- ✅ Improved litter ordering: upcoming litters first, then by puppy age
- ✅ Clean litter card headers without redundant "Litter" text
- ✅ Two-column information grid with professional typography and spacing
- ✅ Enhanced shadows, rounded corners, and premium button styling
- ✅ Complete user interface refinements for luxury breeding website appearance
- ✅ Comprehensive Board & Train Program section emphasizing professional training services
- ✅ Redesigned top navigation with improved usability and modern layout:
  - Organized navigation into logical groups with visual dividers
  - Responsive design with desktop, tablet, and mobile layouts
  - Clickable logo for easy return to top
  - Priority-based mobile menu with highlighted primary actions
  - Subtle backdrop blur effect and premium styling
- ✅ **PHOTO CAROUSEL SYSTEM**: Added interactive image carousel to litter cards
  - Multiple photo display with smooth navigation arrows and dots
  - 5x4 aspect ratio for optimal parent dog and puppy photo display
  - Professional styling with overlay controls and transitions
  - Enhanced with individual puppy photos:
    - Moon & Foxxy: Parent photos + 7 individual puppy photos (Moon, Foxxy, Mr. Peacock, Mr. Turtles, Ms. Aloha, Ms. Sunflower, Mr. Superstar, Mr. Penguin Party, Ms. Alpine Glow)
    - Holden & Alola: Parent photos + 3 chocolate female puppies (Holden, Alola, Summer/Butterfly, Fern/Apple Pie, Willow/Seaglass)
    - Grizzly & Guinevere: Parent photos + 3 chocolate puppies (Grizzly, Guinevere, Pearl/Turtles, Holly/Puppy Love, Hazel/Peacock)
    - Moon & Harper Lee: Beautiful yellow Labrador parent portraits
    - Moon & Nora: Moon and Nora parent photos (yellow and black Labs)
    - Boo Radley & Queen Boudica: Yellow and fox red Labrador parent photos