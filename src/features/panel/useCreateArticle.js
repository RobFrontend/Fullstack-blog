import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticleAPI } from "../../services/apiArticles";
import toast from "react-hot-toast";

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { mutate: createArticle, isPending: isCreating } = useMutation({
    mutationFn: createArticleAPI,
    onSuccess: () => {
      toast.success("Article created!", {
        duration: 2000,
        icon: "✅",
      });
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      toast.error(
        "Article could not be created! Be sure that none field is empty and the file is in",
        { duration: 5000, icon: "❗" }
      );
    },
  });
  return { isCreating, createArticle };
}
