import { useEffect, useState } from "react";
import Product from "../components/products/Product";
const Home = () => {
  const [data, setData] = useState({});
  const [showAddToCart, setShowAddToCart] = useState([]);
  console.log("rendering.......");

  useEffect(() => {
    console.log("data.......");
    const getProducts = () => {
      var cacheData = localStorage.getItem("products");
      if (cacheData && cacheData !== "{}") {
        console.log("no fetch");
        setData(JSON.parse(cacheData));
      } else {
        console.log("fetch");
        var resp = fetch("https://dummyjson.com/products?limit=100")
          .then((resp) => resp.json())
          .then((data) => {
            setData(data);
            localStorage.setItem("products", JSON.stringify(resp));
          })
          .catch((error) => console.log(error));
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="Products-container">
        {data.products ? (
          data.products.map((product) => {
            return (
              <Product
                className="Products"
                key={product.id}
                product={product}
                showAddToCart={showAddToCart}
                setShowAddToCart={setShowAddToCart}
              />
            );
          })
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};
export default Home;
