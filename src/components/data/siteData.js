// Hero Slides Data
import Heroimg1 from "../../assets/img/hero/hero_bg_1_1.png";
import Heroimg2 from "../../assets/img/hero/hero_bg_1_2.png";

// featured cards data
// import feature1 from "../../assets/img/bg/feature-card_bg1.png";
import feature2 from "../../assets/img/icon/feature-icon1-1.svg";
// import feature3 from "../../assets/img/bg/feature-card_bg1.png";
import feature4 from "../../assets/img/icon/feature-icon1-2.svg";
// import feature5 from "../../assets/img/bg/feature-card_bg1.png";
import feature6 from "../../assets/img/icon/feature-icon1-3.svg";

export const heroSlides = [
  {
    id: 1,
    background: Heroimg1,
    subtitle: 'WELCOME TO RJ BODYBUILDER TRAINING',
    title: 'Transform Your Body.',
    highlight: 'Build Real Strength.',
    buttonText: 'Make Appointment',
    buttonLink: '/contact'
  },
  {
    id: 2,
    background: Heroimg2,
    subtitle: 'ELITE PERSONAL TRAINING & BODYBUILDING COACHING',
    title: 'Customized Programs.',
    highlight: 'Real Results.',
    buttonText: 'Make Appointment',
    buttonLink: '/contact'
  }
];

// Feature Cards Data
export const features = [
  {
    id: 1,
    icon: feature2,
    subtitle: 'Healthier Life',
    title: 'Build a Stronger, Healthier Body',
    text: 'With expert guidance and structured training, you\'ll develop strength, confidence, and consistency inside and outside the gym.',
    buttonText: 'View Training Options',
    buttonLink: '/services',
    active: false
  },
  {
    id: 2,
    icon: feature4,
    subtitle: 'Achieve Your Goals',
    title: 'Certified. Experienced. Results-Focused.',
    text: 'RJ combines proven bodybuilding methods with modern training principles to help you reach your physique and strength goals safely and effectively.',
    buttonText: 'View Training Options',
    buttonLink: '/services',
    active: true
  },
  {
    id: 3,
    icon: feature6,
    subtitle: 'Train Day and Night',
    title: 'Flexible Training That Fits Your Life',
    text: 'Busy schedule? No problem. Train in-person or online with programs designed to fit your routine without sacrificing results.',
    buttonText: 'View Training Options',
    buttonLink: '/services',
    active: false
  }
];

// About Tabs Data
export const aboutTabs = [
  {
    id: 'mission',
    title: 'Our Mission',
    content: 'To help individuals build strength, confidence, and discipline through personalized fitness coaching and proven bodybuilding strategies.'
  },
  {
    id: 'vision',
    title: 'Our Vision',
    content: 'To become a trusted name in fitness coaching—locally in Detroit and globally online—by delivering real results through integrity, consistency, and expertise.'
  },
  {
    id: 'goal',
    title: 'Our Goal',
    content: 'To guide every client toward long-term success, not short-term motivation, by creating sustainable training and lifestyle habits.'
  }
];

// Services Data
export const services = [
  {
    id: 1,
    icon: '/assets/img/icon/service-icon_1-1.svg',
    title: 'Bodybuilding Coaching',
    text: 'Programs focused on muscle growth, symmetry, definition, and aesthetic development.'
  },
  {
    id: 2,
    icon: '/assets/img/icon/service-icon_1-2.svg',
    title: 'Personal Training',
    text: '1-on-1 gym or home sessions with hands-on coaching and form correction.'
  },
  {
    id: 3,
    icon: '/assets/img/icon/service-icon_1-3.svg',
    title: 'Online Coaching',
    text: 'Remote coaching with personalized workouts, nutrition guidance, and ongoing support train from anywhere.'
  },
  {
    id: 4,
    icon: '/assets/img/icon/service-icon_1-4.svg',
    title: 'Strength Training',
    text: 'Customized strength programs designed around your fitness level and performance goals.'
  }
];

// FAQ Data
export const faqs = [
  {
    question: 'What training experience levels do you work with?',
    answer: 'RJ works with beginners, intermediate, and advanced lifters.'
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Yes, 1-on-1 training is available in the gym or at home.'
  },
  {
    question: 'Is online coaching available?',
    answer: 'Yes, online coaching is available for clients outside Detroit.'
  },
  {
    question: 'Do you provide nutrition guidance?',
    answer: 'Yes, nutrition support is included to assist muscle gain, fat loss, and recovery.'
  }
];

// Counter Stats Data
export const counters = [
  { icon: '/assets/img/icon/counter-icon_1-1.svg', end: 4.8, suffix: 'K', label: 'JOBS COMPLETED', decimals: 1 },
  { icon: '/assets/img/icon/counter-icon_1-2.svg', end: 325, suffix: '', label: 'MEDIA ACTIVITIES', decimals: 0 },
  { icon: '/assets/img/icon/counter-icon_1-3.svg', end: 598, suffix: '', label: 'SKILLED EXPERTS', decimals: 0 },
  { icon: '/assets/img/icon/counter-icon_1-4.svg', end: 36, suffix: 'K', label: 'HAPPY CLIENTS', decimals: 0 }
];

// Team Members Data
export const team = [
  { id: 1, name: 'George Thomas', role: 'CEO/Founder', image: '/assets/img/team/team-1.png' },
  { id: 2, name: 'Mike Johnson', role: 'Head Trainer', image: '/assets/img/team/team-2.png' },
  { id: 3, name: 'Amelia Harper', role: 'Nutrition Expert', image: '/assets/img/team/team-3.png' },
  { id: 4, name: 'Oliver Samuel', role: 'Fitness Coach', image: '/assets/img/team/team-4.png' }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'Andrew Daniel',
    role: 'Gym Student',
    image: '/assets/img/testimonial/testi_1_1.png',
    text: '"Training with RJ completely changed how I approach fitness. He doesn\'t just give workouts he explains the purpose behind every movement and makes sure my form is solid. My strength....."',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike Harison',
    role: 'Gym Student',
    image: '/assets/img/testimonial/testi_1_2.png',
    text: '"RJ is hands down the best trainer I\'ve worked with. Every session is focused, efficient, and results-driven. There\'s no wasted time, just smart programming and real accountability. I\'ve seen ....."',
    rating: 5
  },
  {
    id: 3,
    name: 'William Henry',
    role: 'Gym Student',
    image: '/assets/img/testimonial/testi_1_3.png',
    text: '"What sets RJ apart is his attention to detail. He corrects form, prevents injuries, and actually cares about long-term progress. I feel stronger, more confident, and safer in the gym than ever ....."',
    rating: 5
  }
];

// Pricing Plans Data
export const pricingPlans = [
  {
    id: 1,
    title: 'Basic Membership',
    price: 19,
    icon: '/assets/img/icon/picing-icon_1-1.svg',
    description: "This category typically offers access to the gym's facilities and equipment.",
    features: ['12 trainings', 'Free shower & lockers', 'Personal yoga mat', 'Free parking'],
    active: false
  },
  {
    id: 2,
    title: 'Standard Membership',
    price: 39,
    icon: '/assets/img/icon/picing-icon_1-2.svg',
    description: "This category typically offers access to the gym's facilities and equipment.",
    features: ['12 trainings', 'Free shower & lockers', 'Personal yoga mat', 'Free parking'],
    active: true
  },
  {
    id: 3,
    title: 'Ultimate Membership',
    price: 69,
    icon: '/assets/img/icon/picing-icon_1-3.svg',
    description: "This category typically offers access to the gym's facilities and equipment.",
    features: ['12 trainings', 'Free shower & lockers', 'Personal yoga mat', 'Free parking'],
    active: false
  }
];

// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: 'Nutrition Tips for Muscle Growth & Fat Loss',
    image: '/assets/img/blog/blog_1_1.png',
    date: '10 Jan 2024',
    author: 'RJ',
    excerpt: 'Learn how proper nutrition supports muscle growth, fat loss, and recovery, with simple strategies that fit real lifestyles.'
  },
  {
    id: 2,
    title: 'How to Build Real Strength Without Injury',
    image: '/assets/img/blog/blog_1_2.png',
    date: '14 Jan 2024',
    author: 'RJ',
    excerpt: 'Discover proven strength training principles that help you lift heavier, move better, and stay injury-free long term.'
  },
  {
    id: 3,
    title: 'Beginner Gym Mistakes That Kill Progress',
    image: '/assets/img/blog/blog_1_3.png',
    date: '18 Jan 2024',
    author: 'RJ',
    excerpt: 'Avoid common training mistakes that slow results. Learn how proper form, programming, and consistency make all the difference.'
  }
];

// Navigation Links
export const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Service',
    path: '/services',
    submenu: [
      { title: 'Service', path: '/services' },
      { title: 'Service Details', path: '/services/details' }
    ]
  },
  { title: 'Contact', path: '/contact' }
];

// Footer Links
export const footerLinks = [
  { title: 'About Us', path: '/about' },
  { title: 'Our Mission', path: '/about#mission' },
  { title: 'Meet The Teams', path: '/team' },
  { title: 'Our Projects', path: '/projects' },
  { title: 'Contact Us', path: '/contact' }
];

// Contact Info
export const contactInfo = {
  phone: '(313) 452-3269',
  email: 'health@rjbodybuilder.com',
  location: 'Detroit Metro Area',
  hours: 'Mon - Sat: 8.00 am-7.00 pm'
};

// Social Links
export const socialLinks = [
  { platform: 'facebook', url: 'https://www.facebook.com/' },
  { platform: 'twitter', url: 'https://www.twitter.com/' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  { platform: 'instagram', url: 'https://www.instagram.com/' }
];
