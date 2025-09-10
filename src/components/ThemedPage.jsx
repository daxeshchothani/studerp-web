import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SpotlightCard from './SpotlightCard'

const contentBySlug = {
  'student-management': {
    title: 'Student Management',
    description: 'Comprehensive student profiles, enrollment tracking, and academic records management.',
    icon: <i className="bx bx-user text-2xl text-white"></i>,
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
  'attendance-tracking': {
    title: 'Attendance Tracking',
    description: 'Real-time attendance monitoring with automated reports and notifications.',
    icon: <i className="bx bx-calendar-check text-2xl text-white"></i>,
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
  'grade-management': {
    title: 'Grade Management',
    description: 'Digital gradebook with automated calculations and progress tracking.',
    icon: <i className="bx bx-award text-2xl text-white"></i>,
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
  },
  'parent-portal': {
    title: 'Parent Portal',
    description: 'Secure portal for parents to view progress, attendance, and communicate with teachers.',
    icon: <i className="bx bx-shield text-2xl text-white"></i>,
    benefits: [
      'Single login for multiple children',
      'Real-time notifications and messaging',
      'Payments and permissions (optional add-ons)',
    ],
    capabilities: [
      'Announcements and calendars',
      'Downloadable reports and certificates',
    ],
  },
  'course-management': {
    title: 'Course Management',
    description: 'Organize courses, subjects, timetables, and curriculum with flexible scheduling.',
    icon: <i className="bx bx-book text-2xl text-white"></i>,
    benefits: [
      'Drag-and-drop timetable builder',
      'Manage sections, rooms, and capacities',
      'Prerequisites and co-requisites',
    ],
    capabilities: [
      'Teacher assignments and load balance',
      'Syllabus templates and resources',
    ],
  },
  'analytics-reports': {
    title: 'Analytics & Reports',
    description: 'Dashboards and detailed reports for attendance, performance, and engagement.',
    icon: <i className="bx bx-bar-chart text-2xl text-white"></i>,
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
  },
}

const ThemedPage = () => {
  const { slug } = useParams()
  const content = contentBySlug[slug] || {
    title: 'Feature',
    description: 'Details coming soon.',
    icon: <i className="bx bx-box text-2xl text-white"></i>,
  }

  return (
    <main>
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-10%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 -z-10 "></div>
      <Header />

      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-3xl'>
          <Link to='/' className='nav-a-link'>&larr; Back to home</Link>
        </div>
        <div className='mt-6 grid md:grid-cols-3 gap-8 items-start'>
          <SpotlightCard className='md:col-span-2 p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center'>
                {content.icon}
              </div>
              <h1 className='text-2xl md:text-3xl font-semibold'>{content.title}</h1>
            </div>
            <p className='text-white/70 leading-relaxed'>{content.description}</p>

            {content.benefits && (
              <div className='mt-6'>
                <p className='text-white/60 text-xs tracking-wider mb-2'>KEY BENEFITS</p>
                <ul className='space-y-2'>
                  {content.benefits.map((b, i) => (
                    <li key={i} className='flex items-start gap-3 text-white/90'>
                      <span className='mt-1 h-5 w-5 rounded-md bg-white/10 border border-white/20 flex items-center justify-center'>
                        <i className='bx bx-check text-[12px]'></i>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.capabilities && (
              <div className='mt-6'>
                <p className='text-white/60 text-xs tracking-wider mb-2'>WHAT YOU CAN DO</p>
                <ul className='list-disc list-inside text-white/80 space-y-1'>
                  {content.capabilities.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.faq && (
              <div className='mt-8'>
                <p className='text-white/60 text-xs tracking-wider mb-2'>FAQ</p>
                <div className='space-y-4'>
                  {content.faq.map((f, i) => (
                    <div key={i} className='rounded-lg bg-white/5 border border-white/10 p-4'>
                      <p className='font-medium text-white'>{f.q}</p>
                      <p className='text-white/70 mt-1'>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </SpotlightCard>

          <SpotlightCard className='p-6 md:p-8'>
            <h3 className='text-lg font-semibold mb-3'>Get a demo</h3>
            <p className='text-white/70 mb-4'>See how this feature fits your workflow.</p>
            <Link to='/#contact' className='btn inline-block'>Request demo</Link>
          </SpotlightCard>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ThemedPage


