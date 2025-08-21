export const CONTACT_INFO = {
  phone: '+91 8700489261',
  email: 'info@enovetmedia.com',
  address: {
    line1: 'OFFICE NO. - 325, H.NO D-288/10 Wadhwa Complex',
    line2: 'Near Laxmi Nagar Metro Station',
    city: 'Delhi',
    postalCode: '110092',
    country: 'India'
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed'
  },
  responseTime: {
    email: 'Email response within 24 hours',
    phone: 'Phone calls returned same day',
    consultation: 'Free initial consultation',
    quote: 'No-obligation project quote'
  }
} as const;

export const COMPANY_INFO = {
  name: 'Enovet Media',
  tagline: 'Transforming Digital Presence',
  description: 'We combine data-driven strategies with creative excellence to deliver measurable ROI for our clients.'
} as const;
