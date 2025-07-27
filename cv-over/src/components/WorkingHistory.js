import React from 'react'
import ResumeItem from './ResumeItem';

const WorkingHistory = ({ workexp }) => (
    <div>
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center dark:text-gray-100">
            <svg className="w-8 h-8 mr-3 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Working History
        </h3>
        {workexp.map((item, index) => (
            <ResumeItem key={index} title={item.title} company={item.company} duration={item.date} description={item.description} />
        ))}
    </div>
);

export default WorkingHistory