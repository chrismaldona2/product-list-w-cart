import styles from "./ProductList.module.css";
import Product from "./components/Product/Product";
import ProductListGrid from "./components/ProductListGrid/ProductListGrid";
import menu from "@/data/menu.json";

export default function ProductList() {
  return (
    <section className={styles["product-list__container"]}>
      <h1 className={styles["product-list__category-title"]}>Desserts</h1>
      <ProductListGrid>
        {menu.map((meal, index) => {
          return <Product product={meal} key={index} />;
        })}
      </ProductListGrid>
    </section>
  );
}
