// client/src/data/integrations.js
export const integrations = [
  {
    n: 1,
    title: 'WhatsApp Business API Integration',
    stack: ['WhatsApp Cloud API', 'REST API', 'Webhooks', 'Postman'],
    problem:
      'Order confirmations, payment reminders, and delivery updates were sent manually over calls and personal chats — communication was slow, inconsistent, and left no traceable record in the ERP.',
    solution:
      'Designed an event-driven messaging flow where key ERP events (order confirmed, shipment dispatched, payment due) automatically trigger pre-approved WhatsApp templates through a Business Solution Provider. Delivery and read statuses are captured via webhooks and written back to the ERP, giving teams a complete communication history against every order.',
    architecture:
      'ERP business event → payload mapping & template selection → WhatsApp Cloud API (via BSP) → delivery/read webhook → status update logged in ERP',
    technologies:
      'WhatsApp Cloud API, REST APIs, JSON payloads, webhooks, message templates, Postman (API testing)',
    impact: [
      { value: 'Real-time', label: 'customer communication on every order event' },
      { value: '~80%', label: 'reduction in manual follow-up calls' },
      { value: '100%', label: 'of messages logged and auditable in ERP' },
    ],
  },
  {
  n: 2,
  title: 'Biometric Attendance Integration (ESSL, CAMS, CamAttendance & Cloud Devices)',
  stack: [
    'ESSL',
    'CAMS API',
    'CamAttendance API',
    'REST APIs',
    'Callback URLs',
    'Attendance Module'
  ],

  problem:
    'Clients used both on-premise and cloud biometric systems. ESSL devices stored attendance in the client’s local environment, while CAMS, CamAttendance, and similar platforms managed attendance through cloud services. HR teams had to manually export attendance and import it into the ERP, resulting in missed punches, data-entry errors, payroll disputes, and delayed salary processing.',

  solution:
    'Built a unified attendance integration pipeline for multiple biometric vendors. For ESSL deployments, configured network connectivity using the client’s system/public IP and periodically pulled attendance records from the local attendance service into Sixorbit automatically. For cloud platforms such as CAMS (Camsunit) and CamAttendance, integrated vendor REST APIs and callback URLs to receive attendance data. Attendance from all sources was normalized, biometric IDs were mapped to employee records, IN/OUT punches were consolidated shift-wise, and attendance policies (shift timing, grace period, overtime) were applied automatically before payroll processing.',

  architecture:
    'ESSL Device → Client Local Attendance System → Public IP / Scheduled Sync → Sixorbit Attendance Service → Punch Normalization → Employee Mapping → Shift-wise IN/OUT Consolidation → Attendance Rules → Payroll\n\nCloud Devices (CAMS / CamAttendance) → Vendor API / Callback URL → Sixorbit Attendance Service → Punch Normalization → Employee Mapping → Shift-wise IN/OUT Consolidation → Attendance Rules → Payroll',

  technologies:
    'ESSL Integration, CAMS API, CamAttendance API, REST APIs, Callback URLs/Webhooks, JSON, Scheduled Sync Jobs, Attendance Rule Engine, Payroll Module',

  impact: [
    { value: 'Automated', label: 'attendance sync across on-premise & cloud devices' },
    { value: 'Multi-device', label: 'support for ESSL, CAMS & CamAttendance' },
    { value: 'On-time', label: 'accurate attendance before payroll processing' },
  ],
},
  {
    n: 3,
    title: 'Email Integration with Domain Authentication (SPF & DKIM)',
    stack: [ 'DNS Records (SPF, DKIM)', 'Email Deliverability', 'ERP Email Triggers'],
    problem:
      "ERP-generated emails (quotations, invoices, notifications) sent through unauthenticated or generic mail setups were landing in spam or getting rejected, and clients wanted these documents delivered reliably from their own business domain — not a third-party sender address.",
    solution:
      "Configured client-specific SMTP within Sixorbit so all ERP emails go out through the client's own mail server and domain identity. Set up email authentication by adding SPF and DKIM records in the client's domain DNS, so receiving mail servers can verify the sender and messages consistently reach the inbox. Once deliverability was established, ERP event triggers (quotation approved, invoice raised) send templated emails automatically from the client's branded address.",
    architecture:
      "ERP event (quotation approved / invoice raised) → templated email composed → client's SMTP server → SPF & DKIM validation at receiving mail server → inbox delivery → send log against order",
    technologies:
      'DNS management (SPF & DKIM records), email deliverability testing, HTML email templates, ERP event triggers',
    impact: [
      { value: 'Inbox', label: 'delivery — emails no longer flagged as spam' },
      { value: 'Branded', label: "sends from the client's own domain" },
      { value: 'Automated', label: 'quotation & invoice emails on every trigger' },
    ],
  },
];