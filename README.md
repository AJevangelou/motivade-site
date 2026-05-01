# Motivate - Fitness App Website

A modern, responsive website for a fitness tracking mobile application built with React and Vite.

## Features

This website showcases a comprehensive fitness app with the following features:

- **AI Workout Generator** - Personalized workout plans created by AI
- **Workout Tracking** - Create and track workouts, exercises, sets, reps, and weights
- **Progressive Overload Tips** - Intelligent recommendations for continuous improvement
- **Nutrition Tracking** - Track calories, macros, and get personalized nutrition tips
- **Water Tracking** - Stay hydrated with easy water intake tracking
- **Health Analytics** - Comprehensive statistics and visualizations of fitness progress

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx/css    # Sticky navigation bar with mobile menu
│   ├── Hero.jsx/css          # Hero section with phone mockup
│   ├── Features.jsx/css      # Features grid and showcase
│   ├── Statistics.jsx/css    # Analytics dashboard showcase
│   ├── CallToAction.jsx/css  # Download CTA section
│   └── Footer.jsx/css        # Footer with links
├── App.jsx                   # Main app component
├── App.css                   # Global styles and variables
└── index.css                 # Base styles
```

## Getting Started

### Prerequisites

- Node.js version 20.19+ or 22.12+ (for running dev server)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Design Features

- **Modern Gradient UI** - Beautiful gradients and shadows throughout
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Interactive Elements** - Hover effects and smooth transitions
- **Phone Mockup** - 3D-styled iPhone mockup showcasing the app
- **Statistics Dashboard** - Visual charts and metrics display
- **App Store Ready** - Professional design ready for app launch

## Customization

### Colors

The color scheme can be customized in [src/App.css](src/App.css:7-26) by modifying the CSS variables:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #06b6d4;
  --accent-color: #8b5cf6;
  /* ... more variables */
}
```

### Content

Update the app name and content in the respective component files:
- App name: [src/components/Navigation.jsx](src/components/Navigation.jsx:11) and [src/components/Footer.jsx](src/components/Footer.jsx:8)
- Features: [src/components/Features.jsx](src/components/Features.jsx:4-29)
- Statistics: [src/components/Statistics.jsx](src/components/Statistics.jsx)

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and Grid/Flexbox
- **SVG** - Icons and graphics

## License

This project is created for your fitness app.
