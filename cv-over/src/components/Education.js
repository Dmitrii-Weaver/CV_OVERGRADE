import React from 'react'
import ResumeItem from './ResumeItem';

const Education = ({ education }) => (
  <div>
    <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center dark:text-gray-100">
      <svg className="w-8 h-8 mr-3 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 11-6-11-6zm0 13.84L5.16 12 12 8.16l6.84 3.84L12 16.84zM12 18.5L1 12l11-6 11 6-11 6.5z" />
      </svg>
      Education
    </h3>
    {education.map((item, index) => (
      <ResumeItem key={index} title={item.title} company={item.company} duration={item.date} description={item.description} />
    ))}
  </div>
);

export default Education