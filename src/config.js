// Navigation configuration
export const navLinks = [
  { label: 'About', href: '#about' },
{ label: 'Prof. Experience', href: '#experience' },  {
    label: 'ERP Work',
    children: [
      { label: 'Expertise', href: '#expertise', description: 'ERP skills & domain knowledge' },
      { label: 'ERP Modules', href: '#erp-modules', description: 'Inventory, Sales & Finance' },  
            { label: 'Business Processes', href: '#business-processes', description: 'Purchase, HR & Operations' },
      { label: 'Integrations', href: '#erp-integrations', description: 'API & third-party apps' },
      { label: 'Case Studies', href: '#case-studies', description: 'Real-world projects' },
      { label: 'SQL & Reporting', href: '#sql-reporting', description: 'Reports & Dashboards' },
      { label: 'Experience', href: '#erp-experience', description: 'Timeline & Roles' },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
 
  
  { label: 'Contact', href: '#contact' },
];

// Site metadata for SEO
export const siteMetadata = {
  title: 'Lingouda Patil - ERP Technical-Functional Consultant | Implementation | SQL Reporting',
  description: 'ERP Technical-Functional Consultant specializing in system configuration, business process mapping, implementation, API integrations, and SQL reporting. Expert in requirements gathering, UAT, and go-live delivery.',
  keywords: 'ERP consultant, technical-functional consultant, ERP implementation, business analysis, SQL reporting, API integration, order-to-cash, procure-to-pay, hire-to-retire, UAT, go-live, SixOrbit ERP',
  name: 'Lingouda Patil',
  url: 'https://lingouda-portfolio.com',
  socialProfiles: {
    linkedin: 'https://www.linkedin.com/in/lingouda-patil-267134212',
    github: 'https://github.com/lingoudappatil',
  },
};

// Contact configuration
export const contactInfo = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'lingoudap@gmail.com',
  phone: '+91-7026589882',
  linkedin: siteMetadata.socialProfiles.linkedin,
  github: siteMetadata.socialProfiles.github,
};

export const contactApiConfig = {
  endpoint: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact',
};

// EmailJS configuration
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder',
  userId: import.meta.env.VITE_EMAILJS_USER_ID || 'user_placeholder',
};
