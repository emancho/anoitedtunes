# Claude Instructions for Anointed Tunes

## Project Overview
This is a Next.js website for "Anointed Tunes" - appears to be a music-related service or band website with components for About Us, Services, and Booking.

## Technology Stack
- **Framework**: Next.js 15.3.3 with App Router
- **React**: Version 19.0.0
- **UI Library**: Mantine v8.0.2 (components, forms, hooks)
- **Styling**: Tailwind CSS v4 + CSS Modules
- **Development**: Turbopack for faster development builds

## Project Structure
- **Main app directory**: `anointed_tuness/`
- **Source code**: `src/app/` (App Router structure)
- **Components**: `src/app/components/` (AboutUs, BookUs, Header, Services)
- **Styling**: CSS Modules (e.g., Header.module.css) + Tailwind + globals.css
- **Public assets**: `public/` directory with images and SVGs

## Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint

## Development Guidelines
- Use App Router conventions (not Pages Router)
- Components use Mantine UI library for consistent design
- Styling combines Tailwind CSS with CSS Modules
- Follow existing component patterns in the components directory
- ESLint configuration is set up - run `npm run lint` after changes

## Deployment
- Configured with AWS Amplify (amplify.yml present)
- Static export configured (out/ directory contains build output)

## Testing & Quality
- Always run `npm run lint` after making changes
- Build the project with `npm run build` to check for build errors
- No specific test framework detected - check with user if tests are needed