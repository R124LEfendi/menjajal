import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nama} - {product.harga}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
