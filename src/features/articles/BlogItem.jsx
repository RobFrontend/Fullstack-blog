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
  text-align: justify;
`;

const PostTime = styled.span`
  font-size: 1.2rem;
  text-align: right;
  opacity: 0.4;
  font-weight: 500;
`;

const Grid2Cols = styled.div`
  display: grid;
  grid-template-columns: 80fr 20fr;
  gap: 2.4rem;
  align-items: center;
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.img`
  justify-self: center;
  border-radius: var(--border-radius-sm);
  &:hover {
    border-radius: var(--border-radius-lg);
  }
  @media (max-width: 50em) {
    display: none;
  }
`;

function BlogItem({ article }) {
  const {
    id: artticleID,
    title,
    articleText,
    publisher,
    image,
    created_at: date,
  } = article;

  return (
    <Article
      style={{
        background: `linear-gradient(to bottom right, rgb(221, 222, 223), rgb(221, 222, 223), rgba(221, 222, 223, 0.7)), url(${image})`,
        backgroundSize: `cover`,
        backgroundPosition: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <Heading as="h2">{title}</Heading>
      <Grid2Cols>
        <RevText>{articleText}</RevText>

        <Img src={image} />
      </Grid2Cols>
      <Grid2Cols>
        <Heading as="h3">Publishing: {publisher}</Heading>
        <PostTime>{date.slice(0, 10)}</PostTime>
      </Grid2Cols>
    </Article>
  );
}

export default BlogItem;
