import React from 'react';
import articles from "./artilcle-content";
import developerImage from '../assets/developerImage.jpg';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <header className="text-center py-10">
                    <img src={developerImage} alt="Web Developer" className="mx-auto w-40 h-40 object-cover rounded-full shadow-lg" />
                    <h1 className="text-6xl font-bold mt-6">Welcome to My Developer Blog</h1>
                    <p className="text-xl mt-3">Join me on my coding adventures!</p>
                </header>

                {/* Main Content */}
                <main className="bg-white shadow-md rounded-lg mx-4 p-8 mt-6">
                    <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                    <p className="text-lg mb-8">Explore tutorials, tech reviews, and coding tips. Stay updated with the latest in web development.</p>
                    {/* Article List */}
                    <div className="space-y-6">
                        {/* Individual Article Preview */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {articles.slice(0, 6).map((article, index) => (
                                <Link key={article.name} to={`/articles/${article.name}`}>
                                    <div key={index} className="bg-white p-4 shadow rounded-lg flex flex-col justify-between h-48">
                                        <h3 className="text-xl font-semibold">{article.title}</h3>
                                        <p className="text-gray-600">{article.summary}</p>
                                        <button className="mt-auto bg-blue-500 text-white rounded px-4 py-2">Read More</button>
                                    </div>
                                </Link>

                            ))}
                        </div>


                    </div>
                </main>


            </div>
        </div>
    );
}

export default Home;
