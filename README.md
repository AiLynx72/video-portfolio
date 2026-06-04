# Personal Portfolio Website

A fully responsive, animated personal portfolio website built from scratch.

## Author
**Dhana Siri Koppisetti**

## Live Site
- Deployed Live Site: [Dhana Siri Koppisetti's Portfolio](https://github.com/Dhanasirikoppisetti/Portfolioo) (Please update this link with your live Vercel or Netlify URL once deployed)

## Tech Stack
- **Framework**: React.js with Vite
- **Styling**: Custom CSS (Vanilla CSS) with CSS Custom Properties (Variables)
- **Icons**: React Icons (`react-icons/fa`)
- **Forms**: Formspree (for email delivery)

## Key Features
- **Responsive Design**: Fluid layout optimized for Mobile, Tablet, and Desktop screen widths.
- **Parallax Scroll Effect**: High-performance scrolling offsets that translate background orbs at varying speeds.
- **On-Scroll Animations**: Scroll reveals triggered by `IntersectionObserver` (Section Headers, Skill Cards, Project Cards, Experience, Contact, and Footer).
- **Accessibility**: Custom `@media (prefers-reduced-motion: reduce)` block to stop animations for users who prefer reduced motion.
- **Preloader**: Elegant cursive text loading progression and smooth exit scale/fade animation.
- **Background Particles**: Slow floating particle background with subtle custom opacity.

## Local Setup & Installation

To run the project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/Dhanasirikoppisetti/Portfolioo.git
cd Portfolioo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The compiled build output will be located in the `dist/` directory, ready to deploy.
