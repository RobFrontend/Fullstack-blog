import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticle as deleteArticleAPI } from "../../services/apiArticles";
import toast from "react-hot-toast";

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteArticle } = useMutation({
    mutationFn: (id) => deleteArticleAPI(id),
    onSuccess: () => {
      toast("Article deleted!", { duration: 2000, icon: "🗑" });
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => toast.error("Article could not be deleted!"),
  });
  return { isDeleting, deleteArticle };
}
