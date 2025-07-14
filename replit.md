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
- **Start Command**: `npm start`
- **Database**: PostgreSQL via Neon Database
- **Environment**: Requires `DATABASE_URL` environment variable
- **Alternative Deployment**: Use `node simple-express-server.js` for static-only deployment

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

## Recent Changes (July 14, 2025)
- ✅ Admin login system successfully deployed and tested
- ✅ External access confirmed working from different networks
- ✅ PostgreSQL database with proper user authentication
- ✅ Admin credentials: username "admin", password "admin123"
- ✅ Simple login form with debug capabilities implemented
- ✅ Admin dashboard accessible for viewing customer inquiries
- ✅ Complete brand color implementation with authentic color palette
- ✅ Hero section updated with subtle cream-yellow background (#fff3c5)
- ✅ Professional dark charcoal titles (#11100f) and olive green accents (#6d761d)
- ✅ Sophisticated color balance achieved for premium breeding website appearance