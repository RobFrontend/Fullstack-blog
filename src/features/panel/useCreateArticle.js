import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateArticle } from "../../services/apiArticles";

export function useCreateArticle() {
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
  return { createArticle, isCreating };
}
