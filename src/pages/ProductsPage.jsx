import { Audio } from "react-loader-spinner";
import { useProducts } from "../context/ProductContext";
import Card from "./../components/Card";
import styles from "./ProductsPage.module.css";
import Loader from './../components/Loader';

function ProductsPage() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && (
         <Loader />
        )}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
