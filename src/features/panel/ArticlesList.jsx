import styled from "styled-components";
import { useArticles } from "../articles/useArticles";
import TableArticlesList from "./TableArticlesList";

const StyledList = styled.div``;

const ArticlesTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.8rem;
  row-gap: 3.2rem;
  border-bottom: 1px solid var(--color-hover);
  padding: 1.8rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 50em) {
    column-gap: 0.8rem;
    padding: 0.8rem;
  }
`;

export const IMG = styled.img`
  height: 7.5rem;
`;

function ArticlesList() {
  const { isLoading, articles } = useArticles();

  if (isLoading) return <h1>Loading</h1>;
  return (
    <StyledList>
      <ArticlesTable>
        <p>Title</p>
        <p>Text</p>
        <p>Publisher</p>
        <p>Image</p>
      </ArticlesTable>
      <ArticlesTable>
        {articles
          .sort((a, b) => b.id - a.id)
          .map((article) => (
            <TableArticlesList article={article} key={article.id} />
          ))}
      </ArticlesTable>
    </StyledList>
  );
}

export default ArticlesList;
