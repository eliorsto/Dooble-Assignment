# Kanat Landing Page

This is the Kanat landing page built with **React** and **Vite**.

## Project Structure

```
vite-kanat/
├─ node_modules/        # Project dependencies
├─ public/              # Static files (images, icons, etc.)
├─ src/                 # Source code
│  ├─ assets/           # Images, fonts, or other static assets
│  ├─ components/       # Reusable React components
│  ├─ hooks/            # Custom React hooks
│  ├─ pages/            # Page components
│  ├─ App.jsx           # Main App component
│  └─ main.jsx          # Entry point for React, renders <App />
├─ .gitignore           # Git ignore rules
├─ index.html           # Main HTML template
├─ package-lock.json    # Lockfile for npm
├─ package.json         # Project metadata and scripts
└─ vite.config.js       # Vite configuration
```

### Explanation for Home Assignment

- **src/components/**: Contains reusable components that can be used across different pages.
- **src/hooks/**: Contains custom hooks for logic reuse.
- **src/pages/**: Organizes pages of the app, keeping code modular.
- **src/assets/**: Stores static assets like images and fonts.
- **App.jsx & main.jsx**: `App.jsx` holds the main layout or routing logic; `main.jsx` is the entry point rendering the app.

This structure keeps the project organized and modular, which is good practice for any React application.

## Setup

1. **Install dependencies**

```bash
npm install
```

2. **Run development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**

```bash
npm run build
```

4. **Preview production build**

```bash
npm run preview
```

