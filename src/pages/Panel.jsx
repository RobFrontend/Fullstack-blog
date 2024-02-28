import styled from "styled-components";
import ArticleForm from "../features/panel/ArticleForm";
import ArticlesList from "../features/panel/ArticlesList";
import { useState } from "react";
import Button from "../ui/Button";

const StyledPanel = styled.article`
  display: grid;
  gap: 6.4rem;
`;

function Panel() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <StyledPanel>
      <ArticlesList />
      <Button size="large" variation="primary" onClick={handleOpen}>
        {isOpen ? "Close form" : "Add Article"}
      </Button>

      {isOpen ? <ArticleForm /> : null}
    </StyledPanel>
  );
}

export default Panel;
