import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProductList products={products} deleteProduct={deleteProduct} />
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {
//   const [products, setProducts] = useState([
//     { id: 1, nama: "sarung", harga: 20000 },
//     { id: 2, nama: "sepatu", harga: 40000 },
//     { id: 3, nama: "sandal", harga: 9000 },
//     { id: 4, nama: "sarden", harga: 10000 },
//     { id: 5, nama: "syal", harga: 50000 },
//     { id: 6, nama: "serbet", harga: 1000 },
//   ]);

//   const deleteProduct = (productId) => {
//     const newProduct = products.filter((product) => product.id !== productId);
//     setProducts(newProduct);
//   };

//   const [name, setName] = useState("Rizal");

//   useEffect(() => {
//     console.log("Use effect running");
//   }, [name]);

//   return (
//     <div>
//       <Router>
//         <Switch>
//           <Route path="/">
//             <ProductList products={products} deleteProduct={deleteProduct} />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
