import styled from "styled-components";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useCreateArticle } from "./useCreateArticle";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";

const StyledForm = styled.form`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding: 3.2rem;
`;

function ArticleForm() {
  const { isCreating, createArticle } = useCreateArticle();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: null,
  });

  function onSubmit(data) {
    createArticle(
      { ...data, image: data.image[0] },
      { onSuccess: (data) => reset() }
    );
  }

  return (
    <>
      <h2>Create Article Form</h2>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            placeholder="title..."
            {...register("title")}
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="articleText">text</label>
          <textarea
            type="text"
            id="articleText"
            placeholder="text..."
            {...register("articleText")}
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="publisher">publisher</label>
          <input
            type="text"
            id="publisher"
            placeholder="publisher..."
            {...register("publisher")}
            required
          />
        </FormRow>
        <FormRow>
          <label>Image</label>
          <FileInput
            variation="danger"
            accept="image/*"
            id="image"
            {...register("image")}
          />
        </FormRow>
        <FormRow>
          <Button size="large" variation="primary" disabled={isCreating}>
            Create article
          </Button>
        </FormRow>
      </StyledForm>
    </>
  );
}

export default ArticleForm;
