import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticleAPI } from "../../services/apiArticles";

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { mutate: createArticle, isPending: isCreating } = useMutation({
    mutationFn: createArticleAPI,
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
  return { isCreating, createArticle };
}
