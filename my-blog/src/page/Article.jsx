import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import articles from "./artilcle-content";

function Article() {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articleId } = useParams();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        if (!isLoading) {
            loadArticleInfo();
        }
    }, [isLoading, user]);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col x-12 items-center gap-6 p-6">
            <article className="max-w-6xl mx-auto prose lg:prose-xl  p-8 bg-white rounded-lg shadow-lg">

                <h1 className="font-bold text-3xl pb-2">{article.title}</h1>
                <div className="upvotes-section">
                    {user
                        ? <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
                        : <button>Log in to upvote</button>}
                    <p className="bg-sky-500 text-white p-4 my-4 rounded-lg shadow-lg inline-block">This article has {articleInfo.upvotes} upvote(s)</p>
                </div>

                {article.content.map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                ))}
                {user ?
                    <AddCommentForm articleName={articleId}
                        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
                    : <button>Log in to add a comment</button>}
                <CommentsList comments={articleInfo.comments} />
            </article>
        </div>
    );
}

export default Article;



