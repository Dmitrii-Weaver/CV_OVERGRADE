import React from 'react'

const ResumeItem = ({ title, company, duration, description }) => (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 dark:bg-gray-700 dark:text-gray-200">
        <h4 className="text-xl font-semibold text-gray-900 mb-1 dark:text-white">{title}</h4>
        <p className="text-md text-gray-600 mb-2 dark:text-gray-300">{company} | {duration}</p>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
    </div>
);


export default ResumeItem