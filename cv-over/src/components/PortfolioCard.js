import React from 'react'

const PortfolioCard = ({ title, description, imageUrl, tags, links, onClick }) => {
    // Truncate description if it's too long for the card preview
    const truncatedDescription = description.length > 150
        ? description.substring(0, 150) + '...'
        : description;

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition duration-500 hover:scale-105 cursor-pointer"
            onClick={onClick} // Add onClick handler here
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/333333?text=Image+Not+Found'; }}
            />
            {/* Darker tint on hover for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {title}
                </h3>
                <p className="text-gray-200 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {truncatedDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    {Array.isArray(tags) ? tags.map((tag, index) => (
                        <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full dark:bg-blue-700">
                            {tag}
                        </span>
                    )) : (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full dark:bg-blue-700">
                            {tags}
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap gap-2 mt-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-400">
                    {links && links.map((linkItem, index) => (
                        <a
                            key={index}
                            href={linkItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors duration-300"
                            aria-label={linkItem.iconType === "github" ? "GitHub Link" : "Website Link"}
                            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking links
                        >
                            {linkItem.iconType === "github" ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.165-1.11-1.474-1.11-1.474-.909-.649.069-.636.069-.636 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.359-1.088.65-1.336-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.385.202 2.406.097 2.659.638.702 1.03 1.594 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.583.688.482C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm2-10h-2V7h2v2z" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard