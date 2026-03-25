import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Products.css';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
}
function FilteredProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (response.ok == false) {
      setError(`Error while loading Products`);
    } else {
      const data = await response.json();
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error != null) {
    return <h3>Error, Please Wait.</h3>;
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1>Filtered Products</h1>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        value={searchTerm}
        placeholder=" 🔎 Search title"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-lg border-0 product-card position-relative">
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{
                    objectFit: "cover",
                    height: "180px",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    background: "#f5f7fa"
                  }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                <p className="card-text fw-semibold text-primary mb-2 fs-5">
                  ${product.price}
                </p>
                <Link to={`/products/${product.id}`} className="btn btn-gradient mt-auto">
                  <i className="bi bi-eye me-1"></i> View Details
                </Link>
              </div>
              <span className="badge bg-gradient position-absolute top-0 end-0 m-2 shadow">
                #{product.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FilteredProductList;