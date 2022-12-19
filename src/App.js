import { useState } from "react";
import Header from "./components/Header";
import productList from "./components/productList";

function App() {
  const [product, setProduct] = useState([
    { id: 1, nama: "sarung", harga: 20000 },
    { id: 2, nama: "sepatu", harga: 40000 },
    { id: 3, nama: "sandal", harga: 9000 },
    { id: 4, nama: "sarden", harga: 10000 },
    { id: 5, nama: "syal", harga: 50000 },
    { id: 6, nama: "serbet", harga: 1000 },
  ]);

  return (
    <div>
      <Header />
      <productList product={product} />
    </div>
  );
}

export default App;
