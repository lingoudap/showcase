export const cases = [
  {
    n: 1,
    title: 'WhatsApp Business API Integration',
    client: 'Distribution/retail business with high order & payment follow-up volume',
    steps: {
      problem:
        'Order confirmations and reminders sent manually; slow responses, no record of what was sent',
      requirement:
        'Identify key ERP events + message types needing templates, approvals, delivery confirmation',
      solution:
        'Event-driven flow from CRM → WhatsApp Business API; delivery status written back per customer',
      implementation:
        'Built/tested in Postman, configured templates, ran a controlled pilot before rollout',
      outcome:
        'Instant consistent updates, sharply fewer manual follow-ups, every message logged to the order',
      value:
        'Faster cash conversion, clear communication audit trail, sales team freed from repetitive messaging',
    },
    metrics: [
      { value: 'Real-time', label: 'order & payment updates' },
      { value: '100%', label: 'comms logged' },
      { value: '↓ effort', label: 'manual follow-ups' },
    ],
  },
  {
    n: 2,
    title: 'Biometric (ESSL) → Payroll Integration',
    client: 'Multi-shift workforce with manual attendance and frequent payroll disputes',
    steps: {
      problem:
        'Attendance collected manually from devices and re-entered into payroll → errors, delays, disputes',
      requirement:
        'Document shift patterns, grace rules, overtime and exception handling to honor automatically',
      solution:
        'Scheduled sync from ESSL devices into ERP attendance with rule mapping → payroll-ready data',
      implementation:
        'Configured the integration, mapped attendance rules, built SQL reconciliation checks per run',
      outcome:
        'Attendance flows to payroll with minimal manual touch; reconciliation catches gaps before processing',
      value:
        '~70% less manual attendance effort, fewer disputes, on-time accurate salary processing',
    },
    metrics: [
      { value: '70%', label: 'less manual effort' },
      { value: 'Accurate', label: 'payroll runs' },
      { value: 'Fewer', label: 'salary disputes' },
    ],
  },
];
