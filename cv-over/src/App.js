import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from "./resumeData"
import NavLink from './components/NavLink';
import Typewriter from './components/Typewriter';
import WorkingHistory from './components/WorkingHistory';
import Education from './components/Education';
import ServiceCard from './components/ServiceCard';
import SkillBar from './components/SkillBar';
import PortfolioSection from './components/PortfolioSection';
import TechStackCArd from './components/TechStackCArd';
import ProjectDetailModal from './components/ProjectDetailModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [filterTag, setFilterTag] = useState('All'); // State for portfolio filter
  const [showProjectDetail, setShowProjectDetail] = useState(false); // State for modal visibility
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project data

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => {
      // 'newTheme' is defined here:
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log("Toggling theme. New theme:", newTheme); // Debugging log
      return newTheme;
    });
  };

  // Apply dark class to body based on theme state
  useEffect(() => {
    console.log("Applying theme class. Current theme:", theme); // Debugging log added here
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log("Added 'dark' class to documentElement."); // Debugging log added here
    } else {
      document.documentElement.classList.remove('dark');
      console.log("Removed 'dark' class from documentElement."); // Debugging log added here
    }
  }, [theme]);

  // Effect to manage body overflow when modal is open
  useEffect(() => {
    if (showProjectDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showProjectDetail]);


  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle project click to show modal
  const handleProjectClick = (project) => {
    console.log("Project clicked:", project.title); // Debugging log
    setSelectedProject(project);
    setShowProjectDetail(true);
  };

  // Handle closing the project detail modal
  const handleCloseProjectDetail = () => {
    setShowProjectDetail(false);
    setSelectedProject(null);
  };

  // Filter portfolio projects based on the selected tag
  const filteredProjects = filterTag === 'All'
    ? data.Portfolio
    : data.Portfolio.filter(project => project.tag === filterTag);

  // Skill data for the interactive skill bar (kept separate as it's a specific tool example)
  const skills = [
    { name: 'React', level: 90, color: 'blue' },
    { name: 'Tailwind CSS', level: 85, color: 'teal' },
    { name: 'JavaScript', level: 95, color: 'yellow' },
    { name: 'Python', level: 80, color: 'green' },
    { name: 'C# .NET', level: 75, color: 'purple' },
    { name: 'Node.js', level: 70, color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-inter text-gray-800 transition-colors duration-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-lg z-50 rounded-b-lg dark:bg-gray-800 dark:bg-opacity-95">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.name}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink sectionId="about" activeSection={activeSection} onClick={scrollToSection}>
              About Me
            </NavLink>
            <NavLink sectionId="resume" activeSection={activeSection} onClick={scrollToSection}>
              Resume
            </NavLink>
            <NavLink sectionId="portfolio" activeSection={activeSection} onClick={scrollToSection}>
              Portfolio
            </NavLink>
            <NavLink sectionId="services" activeSection={activeSection} onClick={scrollToSection}>
              Services
            </NavLink>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Contact Me
            </a>
            {/* Light/Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition-colors duration-300"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'light' ? (
                <span role="img" aria-label="sun">☀️</span>
              ) : (
                <span role="img" aria-label="moon">🌙</span>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
            <NavLink sectionId="about" activeSection={activeSection} onClick={scrollToSection}>
              About Me
            </NavLink>
            <NavLink sectionId="resume" activeSection={activeSection} onClick={scrollToSection}>
              Resume
            </NavLink>
            <NavLink sectionId="portfolio" activeSection={activeSection} onClick={scrollToSection}>
              Portfolio
            </NavLink>
            <NavLink sectionId="services" activeSection={activeSection} onClick={scrollToSection}>
              Services
            </NavLink>
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Contact Me
            </a>
            {/* Mobile Light/Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="block w-full text-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition-colors duration-300 mt-2"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-28"> {/* Increased padding-top to account for fixed nav */}
        {/* Hero Section (About Me) */}
        <section id="about" className="mb-20 p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <img
                src="/assets/photo.PNG"
                alt={data.name}
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-300 animate-fade-in dark:border-blue-600"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-slide-in-top dark:text-white">
                {data.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6 animate-fade-in-delay dark:text-gray-300">
                {data.title} | {data.job}
              </p>
              {/* Typewriter animation for about description */}
              <Typewriter text={data.about} speed={20} />
              <div className="mt-8 flex justify-center md:justify-start space-x-4 animate-fade-in-delay-3">
                {data.socials.Linkedin && (
                  <a
                    href={data.socials.Linkedin.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    {data.socials.Linkedin.text}
                  </a>
                )}
                {data.socials.Github && (
                  <a
                    href={data.socials.Github.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-900"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.165-1.11-1.474-1.11-1.474-.909-.649.069-.636.069-.636 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.359-1.088.65-1.336-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.385.202 2.406.097 2.659.638.702 1.03 1.594 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.583.688.482C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                    </svg>
                    {data.socials.Github.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="mb-20 p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <WorkingHistory workexp={data.workexp} />
            <Education education={data.education} />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20 p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center dark:text-white">My Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.skills.map((skillCategory, index) => (
                <TechStackCArd key={index} title={skillCategory.title} items={skillCategory.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-20 p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">Portfolio</h2>
          <PortfolioSection
            projects={filteredProjects}
            onFilterChange={setFilterTag}
            currentFilter={filterTag}
            onProjectClick={handleProjectClick} // Pass the new handler
          />
        </section>

        {/* Useful Tool Section (Interactive Skill Bar) */}
        <section id="tools" className="mb-20 p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">My Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} color={skill.color} />
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 dark:text-gray-400">
            This interactive bar showcases my proficiency in various technologies. Hover over each skill to see its level!
          </p>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl dark:bg-gray-800 dark:shadow-2xl-dark">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">Contact Me</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-800 flex items-center justify-center dark:text-gray-200">
                <svg className="w-6 h-6 mr-3 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email: <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline ml-2 dark:text-blue-400 dark:hover:text-blue-300">{data.email}</a>
              </p>
              <p className="text-xl font-medium text-gray-800 flex items-center justify-center dark:text-gray-200">
                <svg className="w-6 h-6 mr-3 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm2-10h-2V7h2v2z" />
                </svg>
                Phone: <a href={`tel:${data.phone}`} className="text-blue-600 hover:underline ml-2 dark:text-blue-400 dark:hover:text-blue-300">{data.phone}</a>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-8 dark:text-gray-500">
              Or connect with me on LinkedIn and GitHub!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center rounded-t-lg dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p className="text-sm mt-2">Designed and developed with React and Tailwind CSS.</p>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {showProjectDetail && <ProjectDetailModal project={selectedProject} onClose={handleCloseProjectDetail} />}
    </div>
  );
}

// Add custom CSS for animations and dark mode shadows
const styleSheet = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Custom fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0; /* Start invisible */
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.animate-fade-in-delay-3 {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

/* Slide-in from top animation */
@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-top {
  animation: slideInTop 0.8s ease-out forwards;
}

/* Underline grow animation for active nav link */
@keyframes underlineGrow {
  from { width: 0; }
  to { width: 2rem; } /* Corresponds to w-8 */
}

.animate-underline-grow {
  animation: underlineGrow 0.3s ease-out forwards;
}

/* Custom dark mode shadow for sections */
.dark .shadow-2xl-dark {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* A darker, more pronounced shadow for dark mode */
}
`;

// Inject the CSS into the document head
const styleElement = document.createElement('style');
styleElement.innerHTML = styleSheet;
document.head.appendChild(styleElement);

