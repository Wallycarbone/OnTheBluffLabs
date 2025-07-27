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

## Recent Changes (July 26, 2025)
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