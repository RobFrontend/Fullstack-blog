import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Panel from "./pages/Panel";
import PageNotFount from "./pages/PageNotFount";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="blog" />} />
            <Route path="blog" element={<Blog />} />
            <Route path="panel" element={<Panel />} />
          </Route>
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
