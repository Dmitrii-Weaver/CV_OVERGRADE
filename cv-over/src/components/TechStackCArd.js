import React from 'react'

const TechStackCArd = ({ title, items }) => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] dark:bg-gray-700 dark:text-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 dark:text-white">{title}</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
            {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM9.707 11.293L11 12.586l3.293-3.293 1.414 1.414L11 15.414l-4.707-4.707 1.414-1.414z" />
                    </svg>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default TechStackCArd