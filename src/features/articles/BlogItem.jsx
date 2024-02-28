import styled from "styled-components";
import Heading from "../../ui/Heading";

const Article = styled.div`
  display: grid;
  background-color: var(--color-background);
  padding: 1.8rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`;

const RevText = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1.8rem;
`;

const Grid2Cols = styled.div`
  display: grid;
  grid-template-columns: 80fr 20fr;
  gap: 2.4rem;
  align-items: center;
`;

const Img = styled.img`
  justify-self: center;
  border-radius: var(--border-radius-sm);
  &:hover {
    border-radius: var(--border-radius-lg);
  }
`;

function BlogItem({ article }) {
  const { id: artticleID, title, articleText, publisher, image } = article;

  return (
    <Article>
      <Heading as="h2">{title}</Heading>
      <Grid2Cols>
        <RevText>{articleText}</RevText>

        <Img src={image} />
      </Grid2Cols>
      <Heading as="h3">Publishing: {publisher}</Heading>
    </Article>
  );
}

export default BlogItem;
