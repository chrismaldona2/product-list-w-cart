import "@/styles/global.css";
import "@/styles/variables.css";
import ProductCart from "@/features/ProductCart/ProductCart";
import ProductList from "@/features/ProductList/ProductList";
import ProductPageLayout from "@/components/Layouts/ProductPageLayout/ProductPageLayout";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductPageLayout>
        <ProductList />
        <ProductCart />
      </ProductPageLayout>
    </CartProvider>
  );
}

export default App;
