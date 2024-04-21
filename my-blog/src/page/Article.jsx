import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import articles from "./artilcle-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

function Article() {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col x-12 items-center gap-6 p-6">
            <article className="max-w-6xl mx-auto prose lg:prose-xl  p-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h1 className="font-bold text-3xl pb-2">{article.title}</h1>
                    <button onClick={addUpvote}>Upvote</button>
                    <p className="bg-sky-500 text-white p-4 my-4 rounded-lg shadow-lg inline-block">This article has {articleInfo.upvotes} upvote(s)</p>
                </div>
                {article.content.map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                ))}
                <CommentsList comments={articleInfo.comments} />
            </article>
        </div>
    );
}

export default Article;
