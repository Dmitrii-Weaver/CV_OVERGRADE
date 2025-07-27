import React from 'react'
import PortfolioCard from './PortfolioCard';
import data from "../resumeData"

const PortfolioSection = ({ projects, onFilterChange, currentFilter, onProjectClick }) => {
  // Extract unique tags from all projects
  const allTags = ['All', ...new Set(data.Portfolio.map(project => project.tag))]; // Use data.Portfolio to get all tags, not just filtered ones

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => onFilterChange(tag)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105
              ${currentFilter === tag
                ? 'bg-blue-600 text-white shadow-md dark:bg-blue-500'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.desc}
            imageUrl={project.image}
            tags={project.tag}
            links={project.links}
          />
        ))}
      </div>
    </>
  );
};

export default PortfolioSection