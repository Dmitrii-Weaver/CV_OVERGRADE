import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, speed = 30 }) => { // Adjusted default speed
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [text, index, speed]);

    return <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line dark:text-gray-300">{displayedText}</p>;
};

export default Typewriter