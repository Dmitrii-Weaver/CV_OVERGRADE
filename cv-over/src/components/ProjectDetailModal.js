import React from 'react'

const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-auto"
            onClick={onClose} // Close when clicking outside the modal content
        >
            <div
                className="bg-white rounded-lg shadow-2xl p-6 max-w-3xl w-full mx-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-modal-fade-in dark:bg-gray-800 dark:text-gray-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">{project.title}</h3>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
                />
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.tag) ? project.tag.map((tag, index) => (
                        <span key={index} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full dark:bg-blue-700">
                            {tag}
                        </span>
                    )) : (
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full dark:bg-blue-700">
                            {project.tag}
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                    {project.links && project.links.map((linkItem, index) => (
                        <a
                            key={index}
                            href={linkItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            {linkItem.iconType === "github" ? (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.165-1.11-1.474-1.11-1.474-.909-.649.069-.636.069-.636 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.359-1.088.65-1.336-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.385.202 2.406.097 2.659.638.702 1.03 1.594 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.583.688.482C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm2-10h-2V7h2v2z" />
                                </svg>
                            )}
                            {linkItem.iconType === "github" ? "GitHub" : "Website"}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal