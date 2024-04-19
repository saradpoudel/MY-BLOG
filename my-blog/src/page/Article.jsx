import { useParams } from "react-router-dom";
import articles from "./artilcle-content";
import NotFoundPage from "./NotFoundPage";

function Article() {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) return <NotFoundPage />;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col x-12 items-center gap-6 p-6">
            <article className="max-w-4xl mx-auto prose lg:prose-xl  p-8 bg-white rounded-lg shadow-lg">
                <h1 className="font-bold text-3xl pb-2">{article.title}</h1>
                {article.content.map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                ))}
            </article>
        </div>
    );
}

export default Article;
