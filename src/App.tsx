import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseDetail from "./pages/CourseDetail";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/kurslar/:courseSlug" element={<CourseDetail />} />
      <Route path="/iade-politikasi" element={<RefundPolicy />} />
      <Route path="/sss" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
