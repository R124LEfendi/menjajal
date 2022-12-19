const productList = (props) => {
  return (
    <div>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.nama} - {product.harga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default productList;
