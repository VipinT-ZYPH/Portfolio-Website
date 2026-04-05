# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS for an AI/ML engineer transitioning into full-stack development.

## Features

- **Modern Design**: Clean, minimal, and slightly futuristic UI with glass morphism effects
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and hover effects
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **TypeScript**: Type-safe codebase
- **Component-Based**: Reusable and maintainable components

## Sections

1. **Navbar**: Sticky navigation with smooth scrolling and mobile menu
2. **Hero**: Eye-catching introduction with call-to-action buttons
3. **Skills**: Categorized technical skills with proficiency indicators
4. **Projects**: Featured projects with filtering and detailed information
5. **Contact**: Contact form and professional links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Button.tsx         # Custom button component
│   ├── Card.tsx           # Card component
│   ├── Contact.tsx        # Contact section
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Projects section
│   └── Skills.tsx         # Skills section
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
└── styles/                 # Global styles
    └── globals.css         # CSS variables and Tailwind
```

## Customization

### Personal Information

Update the following files with your information:

- **`src/components/Navbar.tsx`**: Update name and social links
- **`src/components/Hero.tsx`**: Update name, role, and description
- **`src/components/Skills.tsx`**: Update skills and proficiency levels
- **`src/components/Projects.tsx`**: Update projects with your work
- **`src/components/Contact.tsx`**: Update contact information

### Styling

The theme uses CSS variables defined in `src/styles/globals.css`. You can customize:

- Colors: Modify the CSS variables in the `:root` selector
- Typography: Update font imports and font families
- Animations: Adjust or add new animations

### Adding New Projects

1. Open `src/components/Projects.tsx`
2. Add your project to the `projects` array with the following structure:
```typescript
{
  id: number,
  title: string,
  description: string,
  techStack: string[],
  category: string,
  liveUrl?: string,
  githubUrl?: string,
  featured: boolean
}
```

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Use the Next.js preset
- **Traditional Hosting**: Build the project and upload the `.next` folder

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
