# Cinelad - Professional Services Website

A modern, responsive website built with Next.js for a service-based business. Features clean design, modular architecture, and easy content management.

## Features

- 🎨 **Modern Design**: Clean, professional aesthetic with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 🔧 **Modular Architecture**: Easy to maintain and extend
- 📞 **Clear CTAs**: Prominent phone number and contact forms
- 🗂️ **JSON-Driven Content**: Easy to add/modify services without code changes
- 🎯 **SEO Optimized**: Meta tags, semantic HTML, and performance optimization

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── services/          # Services listing page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Homepage
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.js      # Navigation with phone CTA
│   │   └── Footer.js      # Footer with contact info
│   ├── sections/          # Page sections
│   │   ├── Hero.js        # Hero section
│   │   ├── Services.js    # Services showcase
│   │   ├── Process.js     # How we work
│   │   ├── Testimonials.js # Client testimonials
│   │   └── FAQ.js         # Frequently asked questions
│   └── ui/                # Reusable UI components
│       ├── Button.js      # Button component
│       └── Card.js        # Card component
└── data/                  # JSON data files
    ├── services.json      # Services configuration
    ├── site-config.json   # Site-wide settings
    ├── testimonials.json  # Client testimonials
    └── faq.json          # FAQ content
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cinelad
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Adding New Services

To add a new service, edit `src/data/services.json`:

```json
{
  "id": "new-service",
  "title": "New Service",
  "description": "Service description...",
  "icon": "🔧",
  "features": ["Feature 1", "Feature 2"],
  "formField": "New Service"
}
```

The service will automatically appear on the homepage and services page.

### Updating Company Information

Edit `src/data/site-config.json` to update:
- Company name and contact details
- Hero section content
- Process steps
- Social media links

### Customizing Testimonials

Update `src/data/testimonials.json` to modify client testimonials and logos.

### FAQ Management

Add or modify questions in `src/data/faq.json`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed to any static hosting platform:
- Netlify
- AWS Amplify
- GitHub Pages
- Firebase Hosting

Build command: `npm run build`
Output directory: `out` (after adding `output: 'export'` to next.config.js for static export)

## Customization

### Styling

- Global styles: `src/app/globals.css`
- Theme colors: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.js` file
3. Update navigation in `src/components/layout/Navbar.js`

### Form Integration

The contact page includes:
- Link to Google Forms (configurable in `site-config.json`)
- HTML form for basic contact (needs backend integration)

To integrate with a backend:
1. Add form submission handler
2. Connect to your preferred service (EmailJS, Formspree, etc.)

## Performance

- Optimized images with Next.js Image component
- Minimal JavaScript bundles
- Efficient CSS with Tailwind's purging
- SEO-friendly meta tags and structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary. All rights reserved.

## Support

For support or questions about this codebase, contact the development team.