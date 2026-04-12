const projects = [
  {
  id: 1,
  title: "Sales CRM (MERN Stack)",
  subtitle: "Advanced Lead, Follow-up & Order Management System",
  description: "Developed a scalable CRM application to manage complete sales workflows, including lead management, quotation tracking, follow-ups, and order processing. Implemented secure JWT-based authentication and role-based access control to ensure data security and user-level permissions. Built an advanced follow-up system with real-time notifications to improve customer engagement and sales efficiency. Designed custom reporting modules for generating dynamic business insights. Integrated third-party APIs such as WhatsApp, email, and biometric systems. Created a real-time dashboard to monitor key performance metrics and enhance decision-making.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
  category: "CRM",
  featured: true,
  status: "Completed",
  duration: "4 months",
  role: "Full Stack Developer",
  features: [
    "Lead Management & Tracking",
    "Follow-up Management with Notifications",
    "Real-time Dashboard & Analytics",
    "Quotation & Order Management",
    "Custom Reports Generation",
    "Secure JWT Authentication",
  ],
  contribution: "Designed and developed the complete CRM system, including frontend UI with React and Tailwind CSS, backend REST APIs using Node.js and Express, database schema design in MongoDB, implementation of authentication & authorization, integration of external APIs, and deployment.",
  live: "https://example.com/crm-demo",
  github: "https://github.com/lingoudappatil/crm_appp"
},
  {
    id: 2,
    title: "Task Management App",
    subtitle: "Efficient Task Tracking & Status Management",
    description: "Task management system with CRUD operations, deadline tracking, status management, and task filtering. Features include real-time updates and user-friendly interface.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    tech: ["React.js", "JavaScript", "REST API", "Local Storage"],
    category: "Web App",
    featured: false,
    status: "Completed",
    duration: "2 months",
    role: "Frontend Developer",
    features: [
      "CRUD Operations",
      "Deadline Tracking",
      "Task Filtering & Search",
      "Real-time Updates",
      "Responsive Design"
    ],
    contribution: "Designed and developed the complete frontend interface with state management, integrated APIs, and optimized performance.",
    live: "https://example.com/task-app",
    github: "https://github.com/yourusername/task-management"
  },
  {
    id: 3,
    title: "Chat Application",
    subtitle: "Real-time Messaging with WebSocket Technology",
    description: "Real-time chat application with dynamic user management, scalable architecture, message history, and active user tracking. Implemented using WebSocket technology for instant messaging.",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop",
    tech: ["Node.js", "Socket.io", "JavaScript", "Express"],
    category: "Full Stack",
    featured: true,
    status: "In Progress",
    duration: "3 months",
    role: "Backend Lead",
    features: [
      "Real-time Messaging",
      "User Management",
      "Message History",
      "Active User Tracking",
      "Scalable Architecture"
    ],
    contribution: "Architected the backend with Node.js and Socket.io, implemented scalable message handling, and managed real-time synchronization.",
    live: "https://example.com/chat-app",
    github: "https://github.com/yourusername/chat-application"
  },
  {
    id: 4,
    title: "Sales Management Admin Panel",
    subtitle: "Analytics & Sales Order Management",
    description: "Full-stack admin panel for managing sales orders with dynamic visualization using Chart.js. Enhanced UI with filters, date selection, and graphical analytics for better insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tech: ["PHP", "MySQL", "Chart.js", "HTML", "CSS"],
    category: "CRM",
    featured: false,
    status: "Completed",
    duration: "2.5 months",
    role: "Full Stack Developer",
    features: [
      "Sales Order Management",
      "Chart.js Analytics",
      "Dynamic Filters",
      "Date Selection Tools",
      "Graphical Reports"
    ],
    contribution: "Built scalable backend with PHP, created intuitive admin interface, implemented analytics dashboard with Chart.js.",
    live: "https://example.com/admin-panel",
    github: "https://github.com/yourusername/sales-admin"
  },
  {
    id: 5,
    title: "Payroll Management App",
    subtitle: "Enterprise Employee & Salary Management",
    description: "Enterprise payroll system for managing employee records, salary structures, and monthly payroll generation. Integrated JWT-based authentication and REST APIs for secure operations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    featured: true,
    status: "Completed",
    duration: "3.5 months",
    role: "Full Stack Developer",
    features: [
      "Employee Record Management",
      "Salary Structure Configuration",
      "Automated Payroll Generation",
      "Secure JWT Authentication",
      "REST API Integration"
    ],
    contribution: "Designed complete system architecture, implemented secure APIs, built React frontend, and handled database optimization.",
    live: "https://example.com/payroll-demo",
    github: "https://github.com/yourusername/payroll-system"
  }
];

export default projects;