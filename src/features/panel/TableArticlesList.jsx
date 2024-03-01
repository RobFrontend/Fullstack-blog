import MediaQuery from "react-responsive";
import Button from "../../ui/Button";
import { IMG } from "./ArticlesList";
import { useDeleteArticle } from "./useDeleteArticle";
import { AttentionSeeker } from "react-awesome-reveal";

function TableArticlesList({ article }) {
  const { isDeleting, deleteArticle } = useDeleteArticle();
  return (
    <>
      <AttentionSeeker triggerOnce>
        <p>{article.title}</p>
      </AttentionSeeker>
      <AttentionSeeker triggerOnce>
        <p>
          {article.articleText
            .slice(0, 100)
            .replaceAll(article.articleText.slice(97, 100), "...")}
        </p>
      </AttentionSeeker>
      <AttentionSeeker triggerOnce>
        <p>{article.publisher}</p>
      </AttentionSeeker>
      <IMG src={article.image} alt="image book" />
      <MediaQuery minWidth={768}>
        <Button
          size="small"
          variation="danger"
          disabled={isDeleting}
          onClick={() => deleteArticle(article.id)}
        >
          Delete
        </Button>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <Button
          size="small"
          variation="danger"
          disabled={isDeleting}
          onClick={() => deleteArticle(article.id)}
        >
          X
        </Button>
      </MediaQuery>
    </>
  );
}

export default TableArticlesList;
