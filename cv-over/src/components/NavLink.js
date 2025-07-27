import React from 'react'

const NavLink = ({ sectionId, activeSection, onClick, children }) => (
    <button
        onClick={() => onClick(sectionId)}
        className={`relative px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out
      ${activeSection === sectionId ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700'}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
    >
        {children}
        {activeSection === sectionId && (
            <span className="absolute bottom-0 left-1/2 w-8 h-1 bg-blue-600 rounded-full transform -translate-x-1/2 animate-underline-grow dark:bg-blue-400"></span>
        )}
    </button>
);

export default NavLink