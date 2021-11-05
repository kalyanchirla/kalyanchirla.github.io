module.exports = {
  siteTitle: 'Kalyan Chirla',
  siteDescription:
    'Kalyan Chirla is a Computer Science Graduate Student at University of Leeds, who loves learning new things and helping tech beginners to code.',
  siteKeywords:
    'Kalyan Chirla, Kalyan, Chirla, kalyanchirla, kchirla, software engineer, University of Leeds, Computer Science',
  siteUrl: 'https://kalyanchirla.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-212122552-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kalyan Chirla',
  location: 'Leeds, United Kingdom',
  email: 'krchirla@gmail.com',
  github: 'https://github.com/kalyanchirla',
  twitterHandle: '@kalyanchirla',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kalyanchirla',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kalyanchirla/',
    },
    {
      name: 'Codechef',
      url: 'https://www.codechef.com/users/kchirla',
    },
    {
      name: 'Hackerrank',
      url: 'https://www.hackerrank.com/kalyanchirla',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/kalyanchirla/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
