import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Md. Mehedi Hasan",
  lastName: "Soumik",
  name: `Md. Mehedi Hasan Soumik`,
  role: "SQA Engineer",
  avatar: "/images/projects/Mehedi_Hasan.jpg",
  email: "mehedihasan.mehedi607@gmail.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bangla"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Software Quality Assurance, sharing insights on the intersection of creativity, precision, and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hi-mehedi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mehedi-soumik/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/MehediHasan.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between requirements and quality</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Aquality Selenium</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
       I'm Mehedi, a SQA engineer at <strong>JVAI</strong>, where I craft intuitive
       <br />
       user experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a dedicated Software Quality Assurance (SQA) Engineer with expertise in manual testing, API testing, performance testing, and automation testing. I have hands-on experience using tools like Postman, JMeter, Selenium, TestNG, and Aquality Services to ensure software quality and reliability.

        I am skilled in requirement analysis, test planning, test case design, execution, and reporting, and I actively apply BDD (Behavior-Driven Development) practices to bridge the gap between technical and business requirements. I thrive in agile environments and am committed to continuous learning and professional growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Join Venture AI",
        timeframe: "2025 - Present",
        role: "SQA Engineer",
        achievements: [
          <>
              Designed and executed automated test suites using Selenium and TestNG, improving test coverage and reducing regression issues by 40%.
            </>,
            <>
              Implemented API testing workflows with Postman and Newman, ensuring robust and reliable backend services.
            </>,
            <>
              Applied BDD practices to create clear and maintainable test scenarios, bridging communication between QA and development teams.
            </>,
            <>
              Conducted performance testing with JMeter, identifying bottlenecks and optimizing application response times by 25%.
            </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/header_jmeter.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
     company: "A1qa.",
     timeframe: "2025 - Present(Part Time)",
     role: "QA Automation Engineer",
     achievements: [
       <>
         Designed and implemented automated test suites using Selenium and TestNG, improving regression testing efficiency by 35%.
       </>,
       <>
         Conducted API testing with Postman and Newman, validating backend functionality and generating detailed reports for stakeholders.
       </>,
       <>
         Applied BDD practices to create readable and maintainable test scenarios, bridging communication between QA and development teams.
       </>,
       <>
         Performed performance and load testing using JMeter, identifying bottlenecks and optimizing application speed by 20%.
       </>,
     ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Daffodil International University",
        description: <>Computer Science and Engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Focused on enhancing software quality through manual, API, and automated testing using modern QA practices.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Automation with Selenium",
        description: (
          <>Experienced in building reliable test automation scripts using Selenium, TestNG, and Aquality Services to ensure software quality and efficiency.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/selenium-automation.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/software-testing.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "API Testing using Postman",
        description: (
          <>Skilled in testing and validating APIs using Postman, creating automated test scripts, and generating detailed reports with Newman.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/postman-api.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/projects",
  label: "Project",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/received_1342310803144180.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158923862436333148_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_20250827_135604_923~2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158923862436333149_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/avatar.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
