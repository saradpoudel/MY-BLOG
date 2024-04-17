import articles from "./artilcle-content";
import ArticlesListItem from "../components/ArticlesListItem";
function ArticlesList() {
    return (
        <>
            <h1 className="font-bold text-3xl">Articles</h1>
            <ArticlesListItem articles={articles} />
        </>
    )
}
export default ArticlesList;