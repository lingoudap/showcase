# 🚀 Lingouda's Portfolio Website

A modern, responsive portfolio website showcasing expertise in **Full Stack Development**, **CRM Solutions**, and **ERP Systems**. Built with React, Vite, and Tailwind CSS.

## ✨ Features

### Core Functionality
- ✅ **Mobile Navigation** - Responsive hamburger menu for mobile devices
- ✅ **Working Contact Form** - Email submissions via EmailJS integration
- ✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data, and semantic HTML
- ✅ **Scroll Animations** - Smooth fade-in and slide-up effects via AOS (Animate On Scroll)
- ✅ **Responsive Design** - Fully responsive on mobile, tablet, and desktop

### technical Stack
- **Frontend:** React 19, Tailwind CSS 4
- **Build Tool:** Vite 8
- **Animations:** AOS (Animate On Scroll)
- **Email:** EmailJS for form submissions
- **Linting:** ESLint with React hooks rules

### Components
- **Navbar** - Sticky navigation with mobile hamburger menu
- **Hero** - Eye-catching landing section with CTAs
- **About** - Professional background and expertise
- **Skills** - Organized by category (Frontend, Backend, Database, Tools)
- **Projects** - Showcase of completed projects
- **Services** - Services offered with emojis and descriptions
- **Why Hire Me** - Value propositions as interactive cards
- **Contact** - Fully functional contact form with email integration
- **Footer** - Navigation footer with social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone/Download the project:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials (see EmailJS Setup below)
   ```bash
   cp .env.local.example .env.local
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## ⚙️ EmailJS Setup (For Contact Form)

The contact form uses EmailJS to send emails without a backend server.

### Steps:
1. **Sign up at [emailjs.com](https://www.emailjs.com/)**
2. **Create an Email Service:**
   - Go to Email Services → "Create New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup wizard and get your **Service ID**

3. **Create an Email Template:**
   - Go to Email Templates → "Create New Template"
   - Use the template variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Get your **Template ID**

4. **Get Your User ID:**
   - Go to Account → "API Keys"
   - Copy your **Public Key** (this is your User ID)

5. **Add to `.env.local`:**
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
   VITE_EMAILJS_USER_ID=xxxxxxxxxxxxxxxx
   VITE_CONTACT_EMAIL=your-email@example.com
   ```

6. **Test the form** - Try submitting from the Contact section

## 📝 Customization

### Update Contact Information
Edit `.env.local` to change:
- `VITE_CONTACT_EMAIL` - Your email address
- `VITE_LINKEDIN_URL` - Your LinkedIn profile
- `VITE_GITHUB_URL` - Your GitHub profile

### Update Site Metadata
Edit `src/config.js`:
```javascript
export const siteMetadata = {
  title: 'Your Title',
  description: 'Your description',
  name: 'Your Name',
  url: 'https://your-domain.com',
};
```

### Add/Edit Projects
Edit `src/data/projects.js`:
```javascript
{
  title: "Project Name",
  description: "Project description",
  tech: "React, Node.js, MongoDB"
}
```

### Update Skills
Edit `src/data/Skills.js` to add or remove skills by category.

### Update Services
Edit `src/data/services.js` to modify service offerings.

## 🎨 Styling

This project uses **Tailwind CSS** for all styling. No additional CSS files need modification.

### Customize Colors
Colors are defined in the CSS classes throughout components. To change the global color scheme, search and replace:
- `blue-400` / `blue-500` - Primary color
- `gray-900` / `gray-950` - Background color

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Tailwind's `md:` prefix is used for tablet and up.

## 🔍 SEO Improvements

This portfolio includes:
- ✅ Meta description and keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Schema.org Person)
- ✅ Semantic HTML5
- ✅ Mobile-friendly viewport settings
- ✅ Canonical URL

**Audit with:** Lighthouse in Chrome DevTools (F12 → Lighthouse tab)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then deploy dist/ folder to Vercel
```

### Netlify
- Connect your Git repo or deploy drag-and-drop
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
See `vite.config.js` - update `base` if deploying to a subdirectory.

## 🎯 Best Practices

- **Images:** Add a preview image to `public/preview.jpg` for Open Graph
- **Updates:** Keep `.env.local` with your secrets, never commit it
- **Email Form:** Test EmailJS connection before deploying
- **Mobile Testing:** Use Chrome DevTools device emulation
- **Performance:** Run Lighthouse audit regularly

## 📊 Recent Improvements (Latest Update)

✨ **Phase 1: Core Functionality**
- Added mobile hamburger menu with smooth animations
- Implemented working contact form with EmailJS integration
- Created reusable Card and SectionHeader components

🎨 **Phase 2: Visual Enhancements**
- Integrated AOS (Animate On Scroll) for smooth entrance animations
- Enhanced CTA buttons with gradients and icons
- Improved color scheme and visual hierarchy

📈 **Phase 3: SEO & Branding**
- Added comprehensive meta tags and Open Graph
- Implemented JSON-LD structured data
- Enhanced page title and descriptions
- Added proper semantic HTML

🧹 **Phase 4: Code Quality**
- Removed dead CSS from Vite template
- Created centralized config.js for consistency
- Organized constants and metadata
- Improved component architecture

## 🐛 Troubleshooting

**Contact form not sending emails?**
- Verify EmailJS credentials in `.env.local`
- Check browser console for errors (F12)
- Ensure CORS is enabled in EmailJS

**Animations not showing?**
- Clear browser cache (Ctrl+Shift+Del)
- Check that AOS library loaded: `npm list aos`

**Build errors?**
- Clear `node_modules/` and reinstall: `npm ci`
- Check Node version: `node --version`

## 📄 License

This project is personal and open for customization.

## 📞 Questions?

Reach out via the Contact form on the portfolio or modify contact info in `.env.local`

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
