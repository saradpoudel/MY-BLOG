import React from 'react';
import { Link } from "react-router-dom";

function ArticlesListItem({ articles }) {
    return (
        <div>
            {articles.map(article => (
                <Link key={article.name} to={`/articles/${article.name}`} className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out mb-6">
                    <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                    <p>{article.content[0].substring(0, 450)}...</p>
                </Link>
            ))}
        </div>
    );
}

export default ArticlesListItem;
