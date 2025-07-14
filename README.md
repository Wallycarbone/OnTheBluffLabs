# On The Bluff Labradors Website

A professional breeding kennel website built with React, TypeScript, and Express.js.

## Features

- **Professional Design**: Authentic images and content from ontheblufflabradors.com
- **Customer Inquiry System**: Contact form with database storage
- **Admin Dashboard**: Secure login to view customer inquiries
- **Responsive Design**: Works on all devices and screen sizes
- **Database Integration**: PostgreSQL with secure authentication

## Admin Access

- **URL**: `/admin/login`
- **Main Account**: admin / admin123
- **Editor Account**: editor / admin123

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is configured for Replit deployment with automatic builds and PostgreSQL database integration.

## Project Structure

- `client/` - React frontend
- `server/` - Express.js backend
- `shared/` - Shared types and schemas
- `attached_assets/` - Static assets and images

## Technology Stack

- Frontend: React, TypeScript, Tailwind CSS, Wouter
- Backend: Express.js, Drizzle ORM, PostgreSQL
- Authentication: bcrypt password hashing
- UI Components: Radix UI primitives
- Build: Vite, ESBuild