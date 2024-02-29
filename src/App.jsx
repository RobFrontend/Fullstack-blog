import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Panel from "./pages/Panel";
import PageNotFount from "./pages/PageNotFount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="blog" />} />
            <Route path="blog" element={<Blog />} />
            <Route path="panel" element={<Panel />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
