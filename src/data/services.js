const services = [
  {
    id: 1,
    title: "ERP Implementation & Support",
    subtitle: "Enterprise Resource Planning Solutions",
    description: "Complete ERP implementation with system configuration, data migration, and ongoing support. I help businesses streamline operations, improve efficiency, and integrate all core processes into a unified system.",
    icon: "📊",
    category: "Business Solutions",
    featured: true,
    technologies: ["SAP", "Oracle", "Odoo", "Microsoft Dynamics", "Zoho"],
    features: [
      "System Requirements Analysis",
      "Custom Configuration",
      "Data Migration & Cleanup",
      "User Training & Documentation",
      "Post-Implementation Support",
      "Performance Optimization"
    ],
    idealFor: "Mid to large enterprises, manufacturing companies, wholesale distributors",
    deliverables: [
      "Customized ERP system",
      "Data migration plan",
      "User training materials",
      "Implementation timeline",
      "6-month support period"
    ]
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    subtitle: "End-to-End Web Applications",
    description: "Build scalable, high-performance web applications from frontend to backend. I create responsive, feature-rich applications using modern tech stacks tailored to your business needs.",
    icon: "🌐",
    category: "Web Development",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Express", "Next.js", "TypeScript"],
    features: [
      "Responsive UI/UX Design",
      "RESTful API Development",
      "Database Architecture",
      "Authentication & Security",
      "Performance Optimization",
      "Deployment & Hosting"
    ],
    idealFor: "Startups, SMEs, digital agencies",
    deliverables: [
      "Fully functional web application",
      "Source code repository",
      "API documentation",
      "User guide & tutorials",
      "3-month maintenance period"
    ]
  },
  {
    id: 3,
    title: "CRM System Development",
    subtitle: "Customer Relationship Management Solutions",
    description: "Develop custom CRM systems to manage customer interactions, sales pipelines, and business relationships. Streamline your sales processes and improve customer satisfaction.",
    icon: "👥",
    category: "Business Solutions",
    featured: false,
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Socket.io", "JWT"],
    features: [
      "Lead & Opportunity Management",
      "Sales Pipeline Tracking",
      "Customer Database",
      "Communication History",
      "Reports & Analytics",
      "Mobile Responsive Interface"
    ],
    idealFor: "Sales teams, e-commerce businesses, service providers",
    deliverables: [
      "Custom CRM application",
      "Sales dashboard",
      "Integration with existing tools",
      "Team training",
      "30 days free support"
    ]
  },
  {
    id: 4,
    title: "Third-party API Integration",
    subtitle: "Seamless External System Integration",
    description: "Integrate your applications with third-party services and APIs. Connect payment gateways, analytics tools, communication platforms, and other external services seamlessly.",
    icon: "🔌",
    category: "Integrations",
    featured: false,
    technologies: ["Stripe", "PayPal", "Twilio", "Slack", "Google API", "AWS", "GraphQL"],
    features: [
      "API Documentation Review",
      "Custom Integration Logic",
      "Error Handling & Retry Logic",
      "Data Synchronization",
      "Security & Authentication",
      "Testing & Quality Assurance"
    ],
    idealFor: "E-commerce platforms, SaaS applications, business automation",
    deliverables: [
      "Integrated API",
      "Documentation",
      "Test cases",
      "Deployment guide",
      "Technical support"
    ]
  },
  {
    id: 5,
    title: "Admin Dashboard Development",
    subtitle: "Business Intelligence & Analytics",
    description: "Create powerful admin dashboards for data visualization, reporting, and business intelligence. Monitor your business metrics in real-time with intuitive interfaces.",
    icon: "⚙️",
    category: "Web Development",
    featured: true,
    technologies: ["React", "Chart.js", "D3.js", "Tableau", "Power BI", "Node.js"],
    features: [
      "Real-time Data Visualization",
      "Custom Report Generation",
      "User Role Management",
      "Performance Analytics",
      "Data Export (PDF, Excel)",
      "Mobile Responsive Design"
    ],
    idealFor: "Enterprises, startups, analytics-driven companies",
    deliverables: [
      "Fully functional dashboard",
      "Real-time data integration",
      "Custom reports",
      "User access management",
      "Ongoing updates & maintenance"
    ]
  },
  {
    id: 6,
    title: "Technical Support & Troubleshooting",
    subtitle: "Expert Technical Assistance & Bug Fixes",
    description: "Get expert technical support for your existing applications. I diagnose issues, fix bugs, optimize performance, and provide guidance on best practices and improvements.",
    icon: "🛠️",
    category: "Support",
    featured: false,
    technologies: ["React", "Node.js", "PHP", "MySQL", "Debugging Tools", "Performance Profiling"],
    features: [
      "Bug Identification & Fixing",
      "Performance Debugging",
      "Code Review & Optimization",
      "Architecture Assessment",
      "Documentation & Training",
      "Extended Support Plans"
    ],
    idealFor: "Development teams, growing startups, established businesses",
    deliverables: [
      "Fixed codebase",
      "Optimization report",
      "Code documentation",
      "Best practices guide",
      "Support plan options"
    ]
  },
  {
    id: 7,
    title: "Database Design & Optimization",
    subtitle: "Scalable Data Architecture Solutions",
    description: "Design robust, scalable database architectures and optimize query performance. Ensure your data systems can handle growth while maintaining speed and reliability.",
    icon: "🗄️",
    category: "Business Solutions",
    featured: false,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "AWS"],
    features: [
      "Schema Design & Normalization",
      "Query Optimization",
      "Indexing Strategy",
      "Backup & Recovery Plans",
      "Replication & Clustering",
      "Performance Monitoring"
    ],
    idealFor: "Data-heavy applications, startups scaling up, enterprises",
    deliverables: [
      "Optimized database schema",
      "Performance report",
      "Backup procedures",
      "Monitoring setup",
      "Scaling recommendations"
    ]
  },
  {
    id: 8,
    title: "Portfolio Website Development",
    subtitle: "Modern Developer & Business Portfolios",
    description: "Build a stunning, high-performance portfolio website showcasing your projects and expertise. Using React, Tailwind CSS, and Vite, I create modern, responsive portfolios optimized for speed, SEO, and conversions. Perfect for developers, freelancers, and professionals looking to make a strong online presence.",
    icon: "🎨",
    category: "Web Development",
    featured: true,
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "Vercel", "Netlify","Render"],
    features: [
      "Modern, Responsive Design",
      "Project Showcase & Filtering",
      "Contact Forms & Lead Capture",
      "Smooth Animations & Transitions",
      "SEO Optimization",
      "Fast Performance & Loading",
      "Easy Customization",
      "One-Click Deployment"
    ],
    idealFor: "Developers, freelancers, job seekers, small businesses, startups, creative professionals",
    deliverables: [
      "Live deployed website",
      "Full source code repository",
      "Custom domain setup",
      "Content optimization",
      "Performance tuning",
      "3-month free maintenance"
    ]
  }
];

export default services;