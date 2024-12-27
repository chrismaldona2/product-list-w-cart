import "@/styles/global.css";
import "@/styles/variables.css";
import Button from "@/components/Button/Button";
import ProductList from "@/features/ProductList/ProductList";

function App() {
  return (
    <>
      <ProductList />
      <Button>Confirm order</Button>
    </>
  );
}

export default App;
