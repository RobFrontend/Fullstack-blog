import styled from "styled-components";
import Heading from "../ui/Heading";

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

function BlogItem() {
  return (
    <Article>
      <Heading as="h2">Test Article Title</Heading>
      <Grid2Cols>
        <RevText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit
          eum laborum veritatis amet, neque nostrum illo vel et eius illum
          fugiat pariatur sequi sunt, est aut aspernatur quasi? Aperiam. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Non ab, aliquid at
          temporibus accusamus libero. Quidem, distinctio doloremque quas
          suscipit nostrum autem, mollitia beatae minima iure perferendis
          aliquid eum. Quam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aliquam officiis tempora perferendis? Repudiandae, quis maxime.
          Corrupti ducimus iste quo animi cumque veritatis recusandae
          voluptatum, inventore commodi, itaque ipsam officia neque? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Doloribus labore magni
          iusto id illo quisquam consequuntur dignissimos saepe corporis
          reprehenderit, nihil alias accusamus nobis, ipsa reiciendis incidunt
          fuga, omnis quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate repellat repellendus quod ipsa omnis
          harum nam aliquid culpa provident deserunt officiis eos ad animi vero
          rerum mollitia, exercitationem sint necessitatibus.
        </RevText>

        <Img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"
          alt="book"
        />
      </Grid2Cols>
      <Heading as="h3">Publishing: RobArticles</Heading>
    </Article>
  );
}

export default BlogItem;
