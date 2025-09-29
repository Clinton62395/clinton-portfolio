import React from "react";
import BackgroundParticles from "../components/Animation.jsx";
import airbnb from "../assets/airbnb.png";
import dropbox from "../assets/dropbox.png";
import asana from "../assets/asana.png";
import khan_academy from "../assets/khan_academy.png";
import neipaltel from "../assets/neipal.png";
import Netflix from "../assets/netflix.png";
import pinterest from "../assets/pinterest.png";
import whatsapp from "../assets/whasapp.png";
import affinesale from "../assets/affinesale.png";
import { FaCode } from "react-icons/fa";
import { GiLookAt } from "react-icons/gi";
import AutoScrollLogos from "../components/ImageAnime";

function Projects() {
  const projects = [
    {
      title: "Property Booking Platform",
      description:
        "Modern vacation rental platform featuring property listings, advanced search filters, booking calendar, and user authentication. Built with React.js and responsive design for seamless mobile experience.",
      image: airbnb,
      demo: "https://airbnb-web-site.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/",
      technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Property Search",
        "Booking System",
        "User Authentication",
        "Mobile Responsive",
      ],
    },

    {
      title: "Project Management Platform",
      description:
        "Comprehensive team collaboration tool with task management, project tracking, team workflows, and progress monitoring. Features modern dashboard interface and intuitive user experience design.",
      image: asana,
      demo: "https://asana-project-web.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Asana",
      technologies: [
        "React.js",
        "Modern CSS",
        "JavaScript ES6+",
        "UI/UX Design",
      ],
      features: [
        "Task Management",
        "Team Collaboration",
        "Progress Tracking",
        "Dashboard Analytics",
      ],
    },

    {
      title: "Cloud Storage Platform",
      description:
        "Secure file sharing and storage solution with drag-and-drop functionality, folder organization, and file management system. Clean, professional interface optimized for business productivity.",
      image: dropbox,
      demo: "https://dropbox-web-five.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Dropbox",
      technologies: [
        "React.js",
        "File API",
        "CSS Grid",
        "Responsive Framework",
      ],
      features: [
        "File Upload",
        "Folder Management",
        "Secure Sharing",
        "Cross-Platform",
      ],
    },

    {
      title: "Educational Learning Platform",
      description:
        "Interactive e-learning website with course catalog, progress tracking, and educational content management. Features engaging user interface and optimized learning experience for students and educators.",
      image: khan_academy,
      demo: "https://khan-academy-web-site.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Khan-academy",
      technologies: [
        "React.js",
        "Educational UI",
        "Progress APIs",
        "Responsive Design",
      ],
      features: [
        "Course Management",
        "Progress Tracking",
        "Interactive Learning",
        "Student Dashboard",
      ],
    },

    {
      title: "Professional Portfolio Website",
      description:
        "Modern personal portfolio showcasing professional skills, projects, and expertise. Features elegant design, smooth animations, and optimized performance for personal branding and client acquisition.",
      image: neipaltel,
      demo: "https://neipatel-web-site.vercel.app",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Neipatel",
      technologies: [
        "React.js",
        "Animation Libraries",
        "Modern CSS",
        "Performance Optimization",
      ],
      features: [
        "Portfolio Showcase",
        "Professional Design",
        "Contact Integration",
        "SEO Optimized",
      ],
    },

    {
      title: "Visual Discovery Platform",
      description:
        "Pinterest-inspired social platform for visual content sharing with image galleries, user profiles, and discovery features. Implements modern grid layouts and infinite scrolling for optimal user engagement.",
      image: pinterest,
      demo: "https://pinterest-web-site.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Pinterest",
      technologies: [
        "React.js",
        "CSS Grid",
        "Image Optimization",
        "Social Features",
      ],
      features: [
        "Image Galleries",
        "User Profiles",
        "Content Discovery",
        "Social Sharing",
      ],
    },

    {
      title: "Real-Time Messaging Application",
      description:
        "WhatsApp-inspired chat application with real-time messaging, user status, and modern communication interface. Features responsive design and optimized for both desktop and mobile platforms.",
      image: whatsapp,
      demo: "https://whasapp-landing-page.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Whatsapp",
      technologies: [
        "React.js",
        "Real-time APIs",
        "Modern UI",
        "Cross-Platform",
      ],
      features: [
        "Real-time Messaging",
        "User Status",
        "Media Sharing",
        "Mobile Responsive",
      ],
    },

    {
      title: "AfineSale - E-commerce Affiliate Platform",
      description:
        "AfineSale is my first fullstack project — an innovative e-commerce affiliate platform. It features a comprehensive system for managing products, commissions, and partners. Built with a modern architecture and advanced e-commerce functionalities.",
      image: affinesale,
      demo: "https://affinatesale.vercel.app/",
      code: "https://github.com/clinton62395/Affinatesale",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Authentication",
        "Internal Payment Integration",
      ],
      features: [
        "Affiliate System",
        "Dashboard",
        "Commission Management",
        "Sales Tracking",
      ],
    },

    {
      title: "Video Streaming Platform",
      description:
        "Netflix-inspired streaming service with video player, content categories, user authentication, and personalized recommendations. Built with modern React architecture and optimized for video content delivery.",
      image: Netflix,
      demo: "https://netflix-web-site-three.vercel.app/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Netflix",
      technologies: [
        "React.js",
        "Video APIs",
        "Authentication",
        "Content Management",
      ],
      features: [
        "Video Streaming",
        "User Authentication",
        "Content Categories",
        "Personalized Interface",
      ],
    },

    {
      title: "Interactive Web Applications",
      description:
        "Collection of dynamic web applications built with vanilla JavaScript showcasing DOM manipulation, API integrations, and interactive user interfaces. Demonstrates strong foundation in core web technologies.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgzsGkfT4EzquXh4TCm66xky7OSITGbUZ-g&s",
      demo: "https://javascript-class-delta.vercel.app/",
      code: "https://github.com/Clinton62395/javascript-class/tree/master/",
      technologies: [
        "Vanilla JavaScript",
        "DOM Manipulation",
        "API Integration",
        "Modern Web Standards",
      ],
      features: [
        "Interactive UI",
        "API Consumption",
        "Dynamic Content",
        "Pure JavaScript",
      ],
    },
  ];

  return (
    <>
      <BackgroundParticles />

      <div
        className="bi-relative  bi-z-10 bi-h-full bi-container bi-mx-auto bi-bg-black-500/50 bi-shadow-lg bi-shadow-blue-500/50 bi-backdrop-blur bi-flex bi-items-center bi-justify-center bi-p-10 bi-mt-24"
        id="projects"
      >
        <div>
          <h2 className="bi-text-4xl bi-font-bold bi-text-orange-400 bi-text-center bi-mb-8 hover:bi-animate-bounce">
            Professional Projects Portfolio
          </h2>
          <p className="bi-text-gray-300 bi-text-center bi-mb-12 bi-max-w-2xl bi-mx-auto">
            Discover my collection of modern web applications built with
            cutting-edge technologies. Each project demonstrates expertise in
            React.js, responsive design, and user-centered development.
          </p>

          <div className="bi-grid bi-grid-cols-1 md:bi-grid-cols-2 lg:bi-grid-cols-3 bi-gap-10 bi-place-items-center bi-space-y-5 animate__animated animate__fadeIn animate__delay-1s animate__slow">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bi-backdrop-blur border-2 bi-border-dashed border-warning bi-rounded-lg bi-shadow-md bi-text-center bi-shadow-white-500/50 bi-p-5 gap-5 bi-transition-transform bi-duration-300 hover:bi-shadow-lg hover:bi-shadow-yellow-500/50 hover:bi-scale-105 bi-h-full bi-flex bi-flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="bi-w-full bi-h-40 bi-object-cover bi-rounded-lg bi-transition-transform bi-duration-300 bi-hover:bi-scale-105 hover:bi-backdrop-blur image-backdrop"
                />

                <h3 className="bi-text-xl bi-font-bold bi-text-orange-400 bi-mt-4">
                  {project.title}
                </h3>

                <p className="bi-text-gray-300 bi-text-sm bi-leading-relaxed bi-mb-3 bi-flex-grow">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                {project.technologies && (
                  <div className="bi-flex bi-flex-wrap bi-justify-center bi-gap-2 bi-mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bi-bg-blue-500/20 bi-text-blue-300 bi-px-2 bi-py-1 bi-rounded-full bi-text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Features principales */}
                {project.features && (
                  <div className="bi-grid bi-grid-cols-2 bi-gap-1 bi-text-xs bi-text-gray-400 bi-mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bi-flex bi-items-center"
                      >
                        <span className="bi-w-1 bi-h-1 bi-bg-orange-400 bi-rounded-full bi-mr-2"></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                <div className="bi-flex bi-justify-center bi-items-center bi-gap-4 bi-mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bi-bg-blue-300/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-gap-2 bi-justify-center bi-items-center hover:bi-bg-blue-600 bi-text-center bi-transition-colors"
                  >
                    <GiLookAt /> Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bi-bg-green-500/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-justify-center bi-items-center hover:bi-bg-green-600 bi-text-center bi-gap-2 bi-transition-colors"
                  >
                    <FaCode /> Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* les images en animation */}
      <AutoScrollLogos />
    </>
  );
}

export default Projects;
