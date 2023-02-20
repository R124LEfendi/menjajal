import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, nama: "sarung", harga: 20000 },
    { id: 2, nama: "sepatu", harga: 40000 },
    { id: 3, nama: "sandal", harga: 9000 },
    { id: 4, nama: "sarden", harga: 10000 },
    { id: 5, nama: "syal", harga: 50000 },
    { id: 6, nama: "serbet", harga: 1000 },
  ]);

  const deleteProduct = (productId) => {
    const newProduct = products.filter((product) => product.id !== productId);
    setProducts(newProduct);
  };

  const [name, setName] = useState("Rizal");

  useEffect(() => {
    console.log("Use effect running");
  }, [name]);

  return (
    <div>
      <Header />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={() => setName("Efendi")}>Change</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
