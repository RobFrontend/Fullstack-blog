import BlogArticles from "../features/articles/BlogArticles";
import Heading from "../ui/Heading";

function Blog() {
  return (
    <>
      <Heading as="h1">Welcome to my BookBlog 📚</Heading>
      <BlogArticles />
    </>
  );
}

export default Blog;
