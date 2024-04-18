import React from 'react';
import articles from './artilcle-content';
import ArticlesListItem from "../components/ArticlesListItem";

function ArticlesList() {
    return (
        <div className="bg-gray-100  min-h-screen flex flex-col items-center gap-6 p-6">
            <h1 className="font-bold text-3xl mb-4">Articles</h1>
            <div className="w-full max-w-6xl w-full gap-6">
                <ArticlesListItem articles={articles} />
            </div>
        </div>
    );
}

export default ArticlesList;

