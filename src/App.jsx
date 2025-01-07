import "@/styles/reset.css";
import "@/styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "@/pages/products/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
