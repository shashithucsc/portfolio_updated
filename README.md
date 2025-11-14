# 🚀 Ultra-Premium Portfolio Website

A stunning, modern portfolio website built with Next.js 15, TailwindCSS, and Framer Motion featuring glass-morphism design, smooth animations, and responsive layouts.

## ✨ Features

- **Glass-Morphism Design** - Frosted glass effects with blurred backgrounds
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered animations
- **Interactive Components** - Hover effects, parallax scrolling, and micro-interactions
- **Responsive Layout** - Mobile-first design that looks great on all devices
- **Dark/Light Mode** - Toggle between elegant dark and light glass themes
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Performance** - Optimized loading with stunning page transitions

## 🎨 Sections

1. **Hero Section** - Eye-catching intro with floating animated avatar and gradient text
2. **About Section** - Personal bio with stats and value cards
3. **Projects Section** - Showcase of work with glass cards and modal expansion
4. **Skills Section** - Technology stack with animated progress bars
5. **Education Section** - Timeline view of academic achievements
6. **Contact/Footer** - Contact form and social links

## 🛠️ Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Beautiful icon set

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-new/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & glass utilities
├── components/
│   ├── LoadingAnimation.tsx    # Initial loading animation
│   ├── Navbar.tsx             # Sticky navbar with theme toggle
│   ├── HeroSection.tsx        # Hero with parallax effects
│   ├── AboutSection.tsx       # About with stats
│   ├── ProjectsSection.tsx    # Projects grid with modals
│   ├── SkillsSection.tsx      # Skills with progress bars
│   ├── EducationSection.tsx   # Education timeline
│   └── Footer.tsx             # Contact form & footer
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization

### Update Content

Edit the component files in the `components/` directory to add your own:
- Personal information
- Projects
- Skills
- Education
- Contact details

### Modify Colors

Update the gradient colors and glass effects in `app/globals.css`:
- `--glow-primary`
- `--glow-secondary`
- `--glow-accent`

### Adjust Animations

Modify animation timings in component files or add new animations in `tailwind.config.ts`

## 🌟 Key Features

- **Floating 3D Cards** - Hover effects with tilt and scale
- **Parallax Hero** - Smooth scrolling animations
- **Glass Cards** - Frosted glass with backdrop blur
- **Gradient Text** - Animated color-shifting text
- **Interactive Navbar** - Active link indicators
- **Mobile Menu** - Smooth slide-in drawer
- **Loading Animation** - Beautiful entrance experience
- **Scroll Animations** - Fade and slide on scroll
- **Contact Widget** - Sticky floating button

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Deploy easily to Vercel:

```bash
npm run build
```

Then push to your GitHub repository and connect to Vercel.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🎉 Credits

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion

---

**Ready to impress?** Customize this portfolio and make it your own! ✨

