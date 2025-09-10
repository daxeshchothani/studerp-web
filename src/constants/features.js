export const FEATURES = [
  {
    id: 'student-management',
    title: 'Student Management',
    description: 'Comprehensive student profiles, enrollment tracking, and academic records management.',
    icon: 'bx-user',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'student-management',
    benefits: [
      'Centralized student profiles with attendance, grades, and notes',
      'Bulk import/export (CSV) and quick search',
      'Role-based access for admins, teachers, and counselors',
    ],
    capabilities: [
      'Enrollment and transfers',
      'Medical and emergency contacts',
      'Document storage (ID, certificates)',
    ],
    faq: [
      { q: 'Can we migrate existing student data?', a: 'Yes, use CSV import or our guided onboarding.' },
      { q: 'Is data secure?', a: 'All records are encrypted at rest and in transit.' },
    ],
  },
  {
    id: 'attendance-tracking',
    title: 'Attendance Tracking',
    description: 'Real-time attendance monitoring with automated reports and parent notifications.',
    icon: 'bx-calendar-check',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'attendance-tracking',
    benefits: [
      'Instant daily roll calls with one-click status',
      'Automated alerts to parents for absences/tardies',
      'Weekly and monthly compliance reports',
    ],
    capabilities: [
      'Homeroom and period-based attendance',
      'CSV/PDF export for audits',
      'Mobile-friendly teacher view',
    ],
    faq: [
      { q: 'Does it work offline?', a: 'Yes, cached entries sync when connection resumes.' },
    ],
  },
  {
    id: 'grade-management',
    title: 'Grade Management',
    description: 'Digital gradebook with automated calculations and progress tracking.',
    icon: 'bx-award',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'grade-management',
    benefits: [
      'Weighted categories and custom grading scales',
      'Auto-calculated term and final grades',
      'Parent and student portals for transparency',
    ],
    capabilities: [
      'Rubrics and outcomes',
      'Bulk grade entry and import',
      'Publish progress reports',
    ],
    faq: [
      { q: 'Can we customize grading scales?', a: 'Yes, you can set up custom grading scales and categories.' },
    ],
  },
  {
    id: 'parent-portal',
    title: 'Parent Portal',
    description: 'Secure portal for parents to view progress, attendance, and communicate with teachers.',
    icon: 'bx-shield',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'parent-portal',
    benefits: [
      'Single login for multiple children',
      'Real-time notifications and messaging',
      'Payments and permissions (optional add-ons)',
    ],
    capabilities: [
      'Announcements and calendars',
      'Downloadable reports and certificates',
    ],
    faq: [
      { q: 'Can parents access multiple children?', a: 'Yes, parents can view all their children from one account.' },
    ],
  },
  {
    id: 'course-management',
    title: 'Course Management',
    description: 'Organize courses, subjects, timetables, and curriculum with flexible scheduling.',
    icon: 'bx-book',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'course-management',
    benefits: [
      'Drag-and-drop timetable builder',
      'Manage sections, rooms, and capacities',
      'Prerequisites and co-requisites',
    ],
    capabilities: [
      'Teacher assignments and load balance',
      'Syllabus templates and resources',
    ],
    faq: [
      { q: 'Can we import existing timetables?', a: 'Yes, we support CSV import for existing schedules.' },
    ],
  },
  {
    id: 'analytics-reports',
    title: 'Analytics & Reports',
    description: 'Dashboards and detailed reports for attendance, performance, and engagement.',
    icon: 'bx-bar-chart',
    gradient: 'bg-white/10 border border-white/20',
    slug: 'analytics-reports',
    benefits: [
      'KPIs at a glance with drill-downs',
      'Export to CSV/PDF for stakeholders',
      'Comparative trends across terms/years',
    ],
    capabilities: [
      'Attendance heatmaps',
      'Grade distribution charts',
      'Cohort analysis',
    ],
    faq: [
      { q: 'What types of reports are available?', a: 'We provide attendance, academic performance, and engagement reports.' },
    ],
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Save time for teachers and admins",
    description: "Automate routine tasks and reduce administrative burden, allowing educators to focus more on teaching and student engagement.",
    icon: "bx-time-five",
    gradient: "bg-white/10 border border-white/20",
  },
  {
    title: "Easy for students to track performance",
    description: "Provide students with easy access to their academic records, attendance, and progress reports, empowering them to take ownership of their learning journey.",
    icon: "bx-bar-chart-alt-2",
    gradient: "bg-white/10 border border-white/20",
  },
  {
    title: "Simplified communication with parents",
    description: "Facilitate seamless communication between teachers, students, and parents through integrated messaging and notification systems.",
    icon: "bx-message-dots",
    gradient: "bg-white/10 border border-white/20",
  },
  {
    title: "Secure and reliable",
    description: "Ensure data privacy and security with robust encryption and compliance with educational regulations.",
    icon: "bx-lock-alt",
    gradient: "bg-white/10 border border-white/20",
  },
  {
    title: "Course Management",
    description: "Organize courses, subjects, and curriculum with flexible scheduling options.",
    icon: "bx-book-open",
    gradient: "bg-white/10 border border-white/20",
  },
  {
    title: "Analytics & Reports",
    description: "Comprehensive analytics dashboard with detailed reports and insights.",
    icon: "bx-analyse",
    gradient: "bg-white/10 border border-white/20",
  },
];
