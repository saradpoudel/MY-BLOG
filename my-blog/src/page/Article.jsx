import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import articles from "./artilcle-content";
import { Link, useNavigate } from 'react-router-dom';

function Article() {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articleId } = useParams();
    const navigate = useNavigate();

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
        <div className="bg-gray-100 min-h-screen flex flex-col x-12 items-center gap-6 p-6 mt-3">
            <article className="max-w-6xl mx-auto prose lg:prose-xl  p-8 bg-white rounded-lg shadow-lg">

                <h1 className="font-bold text-3xl pb-2">{article.title}</h1>
                <div className="flex justify-center items-center gap-8">
                    {user
                        ? <button className=" px-4 py-2 inline-block rounded-md font-semibold bg-sky-400" onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
                        : <button className="py-2 px-4 rounded-md font-semibold bg-sky-400">Log in to upvote</button>}
                    <p className="text-black font-bold p-4 my-4 rounded-lg shadow-lg inline-block bg-gray-200">This article has {articleInfo.upvotes} upvote(s)</p>
                </div>

                {article.content.map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                ))}
                {user ?
                    <AddCommentForm articleName={articleId}
                        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
                    : <Link to="/login" className="py-2 px-4 rounded-md font-semibold text-blue-500">
                        Log in to add a comment
                    </Link>}

                <div className="border-b-4 border-gray-300 w-1/4 m-auto my-4"></div>




                <CommentsList comments={articleInfo.comments} />
            </article>
        </div>
    );
}

export default Article;



