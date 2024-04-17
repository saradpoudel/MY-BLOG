import { useParams } from "react-router-dom";
import articles from "./artilcle-content";

function Article() {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    return (
        <>
            <h1 className="font-bold text-2xl pb-2">{article.title}</h1>
            {
                article.content.map((paragrpah, i) => (
                    <p key={i}>{paragrpah}</p>
                ))
            }
        </>
    )
}
export default Article;