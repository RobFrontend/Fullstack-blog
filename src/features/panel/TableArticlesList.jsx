import Button from "../../ui/Button";
import { IMG } from "./ArticlesList";
import { useDeleteArticle } from "./useDeleteArticle";

function TableArticlesList({ article }) {
  const { isDeleting, deleteArticle } = useDeleteArticle();
  return (
    <>
      <p>{article.title}</p>
      <p>
        {article.articleText
          .slice(0, 100)
          .replaceAll(article.articleText.slice(97, 100), "...")}
      </p>
      <p>{article.publisher}</p>
      <IMG src={article.image} alt="image book" />
      <Button
        size="small"
        variation="danger"
        disabled={isDeleting}
        onClick={() => deleteArticle(article.id)}
      >
        Delete
      </Button>
    </>
  );
}

export default TableArticlesList;
