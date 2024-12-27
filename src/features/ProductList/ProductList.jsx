import styles from "./ProductList.module.css";
import Product from "./components/Product/Product";
import data from "@/data/menu.json";

export default function ProductList() {
  const menu = data;

  return (
    <section className={styles["product-list__container"]}>
      <h1 className={styles["product-list__category-title"]}>Desserts</h1>
      <ul className={styles["product-list"]}>
        {menu.map((meal, index) => {
          return <Product data={meal} key={index} />;
        })}
      </ul>
    </section>
  );
}
