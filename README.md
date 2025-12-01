# React + TypeScript + Vite + Tailwind CSS

A modern web application starter template built with:

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - A JavaScript library for building user interfaces
- 📘 **TypeScript** - JavaScript with syntax for types
- 🎨 **Tailwind CSS** - A utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall them:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Test-project/
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── public/              # Public static files
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Tailwind CSS

Tailwind CSS is configured and ready to use. The `src/index.css` file includes the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can customize Tailwind in `tailwind.config.js`.

## TypeScript

TypeScript is fully configured. The project includes:

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js-specific settings

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## License

MIT
