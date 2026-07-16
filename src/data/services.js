const services = [
  {
    id: 1,
    title: "ERP Implementation & Consulting",
    subtitle: "End-to-End Enterprise Resource Planning Solutions",
    description: "Lead complete ERP implementations from requirements analysis through go-live. I guide businesses through system configuration, business process mapping, data migration, and stakeholder enablement to drive digital transformation and operational efficiency.",
    icon: "📊",
    category: "Business Solutions",
    featured: true,
    technologies: ["SAP", "Oracle", "Odoo", "Microsoft Dynamics", "Zoho"],
    features: [
      "Requirements Analysis & BRD",
      "Business Process Mapping",
      "System Configuration & Customization",
      "Data Migration & Validation",
      "UAT Leadership & Testing",
      "Go-Live Execution & Hypercare"
    ],
    idealFor: "Mid to large enterprises, manufacturing companies, wholesale distributors",
    deliverables: [
      "Configured ERP system",
      "Process documentation",
      "User training program",
      "Implementation roadmap",
      "Post-launch support"
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
    title: "API Integration & System Connectivity",
    subtitle: "Seamless Third-Party Integration Solutions",
    description: "Design and implement integrations between ERP systems and third-party applications. I architect solutions for WhatsApp APIs, biometric systems, payment gateways, and custom connectors—ensuring data consistency and operational continuity.",
    icon: "🔗",
    category: "Integrations",
    featured: false,
    technologies: ["REST APIs", "Webhooks", "Postman", "WhatsApp Business API", "ESSL Biometric", "AWS", "Custom Connectors"],
    features: [
      "Integration Architecture Design",
      "API Documentation & Implementation",
      "Error Handling & Retry Logic",
      "Data Synchronization",
      "Security & Authentication",
      "Testing & Validation"
    ],
    idealFor: "Enterprises with existing systems, e-commerce platforms, multi-system environments",
    deliverables: [
      "Integrated architecture",
      "API specifications",
      "Test cases & validation",
      "Deployment guide",
      "Integration documentation"
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
    title: "Portfolio Website Development with Deployment",
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