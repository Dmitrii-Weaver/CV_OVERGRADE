import React from 'react'
import PortfolioCard from './PortfolioCard';
import data from "../resumeData"

const PortfolioSection = ({ projects, onFilterChange, currentFilter }) => { // Removed onProjectClick prop
  // Extract unique tags from all projects
  const allTags = ['All', ...new Set(data.Portfolio.map(project => project.tag))];

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => onFilterChange(tag)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
              ${currentFilter === tag
                ? 'bg-blue-600 text-white shadow-md dark:bg-blue-500 border-2 border-blue-700 dark:border-blue-400' // Added border for active state
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PortfolioCard
            key={project.title} // Use a unique identifier like title for key
            title={project.title}
            description={project.desc}
            imageUrl={project.image}
            tags={project.tag}
            links={project.links}
            index={index} // Pass index for staggered animation
          />
        ))}
      </div>
    </>
  );
};
export default PortfolioSection