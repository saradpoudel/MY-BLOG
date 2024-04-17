import { useParams } from "react-router-dom";
import articles from "./artilcle-content";

function Article() {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    return (
        <>
            <h1>{article.title}</h1>
            {
                article.content.map(paragrpah => (
                    <p>{paragrpah}</p>
                ))
            }
        </>
    )
}
export default Article;