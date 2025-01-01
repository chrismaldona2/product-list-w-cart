import ProductPageLayout from "./layouts/ProductsPageLayout/ProductsPageLayout";
import ProductList from "@/features/products/ProductList";
import Cart from "@/features/cart/Cart";
import CartProvider from "@/shared/contexts/CartContext";
import Footer from "@/shared/components/Footer/Footer";

export default function ProductsPage() {
  return (
    <>
      <CartProvider>
        <ProductPageLayout>
          <ProductList />
          <Cart />
        </ProductPageLayout>
      </CartProvider>
      <Footer />
    </>
  );
}
