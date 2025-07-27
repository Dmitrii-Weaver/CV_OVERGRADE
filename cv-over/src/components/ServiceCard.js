import React from 'react'

const ServiceCard = ({ title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200">
        <div className="p-4 bg-blue-100 rounded-full mb-4 dark:bg-blue-800">
            <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
    </div>
);
export default ServiceCard