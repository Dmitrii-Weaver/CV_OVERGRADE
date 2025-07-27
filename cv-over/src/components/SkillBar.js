import React, { useState } from 'react'

const SkillBar = ({ name, level, color }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-full bg-gray-200 rounded-full h-8 overflow-hidden cursor-pointer group dark:bg-gray-700"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`h-full rounded-full transition-all duration-700 ease-out`}
                style={{
                    width: `${level}%`,
                    backgroundColor: `var(--color-${color}-600)`, // Using CSS variables for dynamic colors
                    '--color-blue-600': '#2563eb', '--color-blue-400': '#60a5fa',
                    '--color-teal-600': '#0d9488', '--color-teal-400': '#2dd4bf',
                    '--color-yellow-600': '#d97706', '--color-yellow-400': '#facc15',
                    '--color-green-600': '#16a34a', '--color-green-400': '#4ade80',
                    '--color-purple-600': '#9333ea', '--color-purple-400': '#c084fc',
                    '--color-red-600': '#dc2626', '--color-red-400': '#f87171',
                }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-between px-4 text-sm font-medium text-gray-900 dark:text-gray-200">
                <span>{name}</span>
                <span
                    className={`transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    {level}%
                </span>
            </div>
        </div>
    );
};

export default SkillBar