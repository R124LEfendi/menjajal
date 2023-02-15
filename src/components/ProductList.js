const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nama} - {product.harga}{" "}
            <button onClick={() => deleteProduct(product.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
