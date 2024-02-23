import styled from "styled-components";
import BlogItem from "./BlogItem";

const ArticleBox = styled.div`
  padding: 6.4rem 1.8rem;
  display: grid;
  gap: 4.8rem;
`;

function BlogArticles() {
  return (
    <ArticleBox>
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </ArticleBox>
  );
}

export default BlogArticles;
