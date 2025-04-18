# LiveTOKENED Frontend Directory Context

## Project Overview
- **Framework**: Next.js 15.3.1
- **React Version**: 19.0.0
- **Structure**: Uses the App Router pattern

## Directory Structure

```
/frontend
├── .git/                  # Git repository files
├── .gitignore             # Git ignore configurations
├── README.md              # Project documentation
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── node_modules/          # Dependencies
├── package-lock.json      # Package version lock file
├── package.json           # Project metadata and dependencies
├── public/                # Static assets
│   ├── file.svg           # File icon
│   ├── globe.svg          # Globe icon
│   ├── next.svg           # Next.js logo
│   ├── vercel.svg         # Vercel logo
│   └── window.svg         # Window icon
└── src/                   # Source code
    └── app/               # Next.js App Router structure
        ├── favicon.ico    # Browser favicon
        ├── globals.css    # Global CSS styles
        ├── layout.js      # Root layout component (with Geist font)
        ├── page.js        # Main page component
        └── page.module.css # Page-specific CSS module
```

## Key Features
- Uses Next.js App Router with React 19
- Utilizes CSS Modules for styling
- Implements responsive design with media queries
- Uses Geist and Geist Mono fonts from Google
- Supports dark/light mode via CSS variables and `prefers-color-scheme`

## Application Structure
- **Root Layout**: Sets up font configuration and basic HTML structure
- **Main Page**: A starter Next.js template page with links to documentation and deployment options
- **Styling**: Combines global CSS with modular CSS for component-specific styling

## Development Commands
- `npm run dev`: Starts the development server with turbopack
- `npm run build`: Builds the application for production
- `npm run start`: Starts the production server
- `npm run lint`: Runs the linter
