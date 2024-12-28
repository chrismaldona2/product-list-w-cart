import "@/styles/global.css";
import "@/styles/variables.css";
import ProductCart from "@/features/ProductCart/ProductCart";
import ProductList from "@/features/ProductList/ProductList";
import ProductPageLayout from "@/components/Layouts/ProductPageLayout/ProductPageLayout";

function App() {
  return (
    <ProductPageLayout>
      <ProductList />
      <ProductCart />
    </ProductPageLayout>
  );
}

export default App;
