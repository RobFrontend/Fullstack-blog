import styled from "styled-components";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useCreateArticle } from "./useCreateArticle";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateArticle } from "../../services/apiArticles";

const StyledForm = styled.form`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding: 3.2rem;
`;

function ArticleForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: null,
  });
  // const { createArticle, isCreating } = useCreateArticle();

  const queryClient = useQueryClient();
  const { mutate: createArticle, isLoading: isCreating } = useMutation({
    mutationFn: CreateArticle,
    onSuccess: () => {
      alert("Article created");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  function onSubmit(data) {
    createArticle({ ...data, image: data.image[0] });
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
            placeholder="title"
            {...register("title")}
          />
        </FormRow>
        <FormRow>
          <label htmlFor="articleText">text</label>
          <textarea
            type="text"
            id="articleText"
            placeholder="text"
            {...register("articleText")}
          />
        </FormRow>
        <FormRow>
          <label htmlFor="publisher">publisher</label>
          <input
            type="text"
            id="publisher"
            placeholder="publisher"
            {...register("publisher")}
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