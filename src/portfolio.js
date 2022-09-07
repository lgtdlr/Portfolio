const header = {
  homepage: 'https://lgtdlr.github.io/portfolio',
  title: 'LT.',
}

const about = {
  name: 'Leonardo Torres',
  role: 'Computer Engineer Undergraduate Student',
  description:
    'With a passion for learning, designing, and developing, I thrive to build the skill sets and the professional background necessary to dive deep into the engineering world. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ On the software side, I have developed as full-stack skills through personal projects, hackathons, and internships where I worked on designing databases, the backend and the frontend. I am confident problem-solving, transitioning between different programming languages, and learning and using new technologies. I have strong troubleshooting and debugging skills, and I am drawn to the areas of Software Engineering, Full-stack Engineering, DevOps Engineering, Cybersecurity, and Networking. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ In the hardware area, I have built an understanding of circuit design and analysis, electronics, programming microcontrollers, and synthesizing FPGAs.',
  resume: 'https://9f7245c2-4419-47d7-9dae-644554fc5839.filesusr.com/ugd/b3f117_195108486b6640a899d2c03a24a98367.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/leonardo-torres-de-la-rosa/',
    github: 'https://github.com/lgtdlr',
  },
}

const experiences = [
  {
    name: 'JPMorgan Chase & Co.',
    description:
      'Deployed a full-stack web-based merchant dashboard supplying key transaction metrics in near real time to premier Chase clients.',
    subdescription: ['Software Engineer Intern', 'June 2022 - August 2022'],
  },
  {
    name: 'AbbVie Biotechnology',
    description:
      'Designed testing procedures for Filter Integrity Testing in the Small Volume Parenteral area and programmed it in the MES. Deployed various business application.',
      subdescription: ['Engineering COOP', 'January 2022 - May 2022'],
  },
  {
    name: 'Verizon',
    description:
      'Built a proof of concept full-stack standardized service for adding and generating GIS map layers to the company\'s network planning platform with an automated workflow. ',
      subdescription: ['Software Developer Intern', 'June 2021 - August 2021'],
  },
  {
    name: 'Verizon',
    description:
      'Built a COVID purpose Android app that implemented various facial analytical features such as sentiment analysis, object detection, and temperature measurement.',
      subdescription: ['Technology Intern', 'June 2020 - August 2020'],
  },
  {
    name: 'Department of Defense',
    description:
      'Created testing procedures and updated technical documentation. Led OS Software Testing for various laptops and co-led inspection and testing of Input-Output Modules.',
      subdescription: ['Engineering COOP', 'January 2020 - May 2020'],
  },
]

const projects = [
  {
    name: 'Booking System',
    description:
      'Full-stack course project where users can register, login, book rooms for events, and set their availability.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'Flask'],
    sourceCode: 'https://github.com/lgtdlr/Booking-System',
    livePreview: 'https://github.com/lgtdlr/Booking-System',
  },
  {
    name: 'Transactions Dashboard',
    description:
      'Dashboard where users can see their daily, monthly and yearly total income that was received through ATH Movil.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'Flask'],
    sourceCode: 'https://github.com/lgtdlr/Codfish',
    livePreview: 'https://github.com/lgtdlr/Codfish',
  },
  {
    name: 'Game Catalog (in-progress)',
    description:
      'Full-stack project of a Steam mock for practicing new tech stack.',
    stack: ['Tailwind CSS', 'TypeScript', 'Angular', 'Spring Boot', 'Elasticsearch'],
    sourceCode: 'https://github.com/lgtdlr/Staem',
    livePreview: 'https://github.com/lgtdlr/Staem',
  },
  {
    name: 'DinnerDash',
    description:
      'Dinner Dash Java Game project for Advanced Programming Course.',
    stack: ['Java'],
    sourceCode: 'https://github.com/lgtdlr/DinnerDash',
    livePreview: 'https://github.com/lgtdlr/DinnerDash',
  },
  {
    name: 'Java Snake',
    description:
      'Snake Java game project for Advanced Programming Course.',
    stack: ['Java'],
    sourceCode: 'https://github.com/lgtdlr/Snake',
    livePreview: 'https://github.com/lgtdlr/Snake',
  },
]

const skills = [
  
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'React',
  'SASS',
  'Material UI',
  'JWT',
  'Git',
  'Angular',
  'Postman',
  'PostgreSQL',
  'Oracle SQL',
  'Android',
  'Flask',
  'Spring Boot',
  'Elasticsearch',
  'Docker',
  'HTML',
  'CSS',
  'JavaScript',
]

const contact = {
  email: 'leonardo.torres5@upr.edu',
}

export { header, about, experiences, projects, skills, contact }
