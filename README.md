# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# # SoftSell

**SoftSell** is a modern web application designed to help users sell their unused software licenses quickly and securely. This project was developed using **React** and **Vite**, with **Tailwind CSS** for styling and involves several additional libraries for animations and icons.

## Table of Contents

- [Overview](#overview)
- [Implemented Features](#implemented-features)
- [Design Choices](#design-choices)
- [Time Spent](#time-spent)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview

SoftSell enables users to convert unused software licenses into cash instantly. With a clean interface and user-friendly navigation, the platform ensures security and efficiency for both sellers and buyers.

## Implemented Features

- **Modern Responsive UI:** 
  - Developed using **React** for a dynamic single-page application.
  - Stylish, responsive design via **Tailwind CSS**.
- **Dark Mode Support:** 
  - A built-in toggle for switching between light and dark themes.
- **Interactive Components:** 
  - **Hero Section:** Introduces the platform with a strong call-to-action.
  - **How It Works:** Step-by-step visual guide to the selling process.
  - **Impact Statistics:** Real-time animated counters showing key metrics.
  - **Testimonials:** Carousel of customer feedback.
  - **Logo Marquee:** Scrolling presentation of partner logos.
  - **Contact Form:** Simple and effective user contact mechanism.
  - **AI-Powered FAQ Help:** Interactive help panel to resolve common queries quickly.
- **SEO Optimization:** 
  - Includes crucial meta tags and Open Graph settings for better search visibility.
- **Build and Deployment:** 
  - Utilizes **Vite** for a fast and smooth development and build process.

## Design Choices

- **Modular Architecture:** 
  - The codebase is structured into small, manageable components, promoting reusability and ease of maintenance.
- **Utility-First Styling:** 
  - **Tailwind CSS** was the preferred choice for quickly building custom designs without leaving the HTML.
- **Performance-Driven:** 
  - Leveraged Vite for its speed and hot module replacement (HMR) features, ensuring a seamless development experience.
- **User-Centric Design:**
  - Focused on a clear, intuitive flow from landing on the homepage to completing a transaction.
- **Accessibility and Responsiveness:** 
  - Ensured compliance with accessibility standards and a responsive design that works well across devices.

## Time Spent

The project development took approximately **60 hours** distributed as follows:

- **Initial Setup & Research:** 10 hours
- **UI/UX Design:** 15 hours
- **Component Development:** 20 hours
- **Testing & Debugging:** 10 hours
- **Final Adjustments & Deployment Preparation:** 5 hours

## Project Structure

```
licence-project/
├── index.html                 # Main HTML file
├── package.json               # Project metadata and scripts
├── vite.config.js             # Vite configuration file
├── README.md                  # Project documentation
├── src/
│   ├── index.css              # Global CSS (includes Tailwind directives)
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Entry point for the React app
│   ├── App.css                # Additional global styles (if needed)
│   └── components/            # Reusable UI components
│       ├── AiHelp.jsx
│       ├── ContactForm.jsx
│       ├── HeroSection.jsx
│       ├── HowItWorks.jsx
│       ├── LogoMarquee.jsx
│       ├── SocialIcons.jsx
│       ├── StatsSection.jsx
│       ├── Testimonials.jsx
│       ├── ThemeToggle.jsx
│       └── WhyChooseUs.jsx
```


## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Bundles the application for production.
- **`npm run preview`**: Serves the production build locally.
- **`npm run lint`**: Runs ESLint to analyze and fix code issues.

## Technologies

- **React** – JavaScript library for building user interfaces
- **Vite** – Next-generation frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animations and transitions
- **React Icons** – Icon collection for React projects

## Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bug fix, and then submit a pull request. Ensure that your changes follow the code style and pass the existing test suite.

## License

This project is for educational purposes and demonstration of modern web application development practices.