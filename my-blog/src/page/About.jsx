import React from 'react';

function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg mt-8 mb-4 rounded-lg">
                <h1 className="text-5xl font-bold text-center mb-6">About This Blog</h1>
                <div className="text-center">
                    <p className="text-lg mb-4">Welcome to my blog where I share insights and experiences from the world of web development.</p>
                    <p className="text-lg mb-4">Here, you'll find articles ranging from tutorials and tech reviews to personal anecdotes that showcase the journey of a web developer.</p>
                    <p className="text-lg mb-4">This blog is a platform for both budding and experienced developers to learn, share, and discuss the ever-evolving landscape of web technologies.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full shadow">Web Developer</span>
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full shadow">JavaScript Developer</span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full shadow">Backend Developer</span>
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full shadow">React Developer</span>
                </div>
            </div>
        </div>
    );
}

export default About;
