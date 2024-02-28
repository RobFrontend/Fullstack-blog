import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticle as deleteArticleAPI } from "../../services/apiArticles";

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteArticle } = useMutation({
    mutationFn: (id) => deleteArticleAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => console.log(err.message),
  });
  return { isDeleting, deleteArticle };
}
