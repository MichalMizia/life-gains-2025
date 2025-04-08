import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProgramPage from "./pages/ProgramPage";
import { ArticlePage } from "./pages/blog/ArticlePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
