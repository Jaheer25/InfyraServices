# Overview

Infyra is a full-stack web application for a computer services and digital marketing training business located in Barasat. The application serves as both a marketing website and a customer management platform, offering information about computer repair services, digital marketing courses, and providing contact forms for customer inquiries and business registrations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Client-side routing with Wouter for single-page application navigation
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured route handlers
- **Development**: Hot reloading with Vite integration in development mode
- **Error Handling**: Centralized error handling middleware with structured error responses

## Authentication System
- **Provider**: Replit Auth integration using OpenID Connect
- **Session Management**: Express sessions with PostgreSQL session store
- **Security**: Secure cookies with HTTP-only flags and CSRF protection
- **Authorization**: Route-level authentication middleware protecting sensitive endpoints

## Database Layer
- **Database**: PostgreSQL via Neon Database serverless connection
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migration**: Drizzle Kit for database schema migrations
- **Connection**: Connection pooling with @neondatabase/serverless for optimal performance

## Data Models
- **Users**: Authentication data with profile information (email, name, avatar)
- **Contacts**: Customer inquiry submissions with contact details and messages
- **Business Registrations**: Course enrollment data for digital marketing training
- **Sessions**: Secure session storage for authentication state

## Application Features
- **Public Pages**: Landing page, services showcase, course information, about page
- **Contact System**: Multi-purpose contact forms for general inquiries and course registrations
- **Authentication Flow**: Secure login/logout with user session management
- **Responsive Design**: Mobile-first responsive design with consistent branding

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

## Authentication Services
- **Replit Auth**: OpenID Connect authentication provider integration
- **Passport.js**: Authentication middleware with OpenID Connect strategy

## UI/UX Libraries
- **Radix UI**: Accessible component primitives for form controls and interactive elements
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form library with validation integration

## Development Tools
- **Vite**: Fast build tool with React plugin and TypeScript support
- **Drizzle Kit**: Database schema management and migration tool
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration