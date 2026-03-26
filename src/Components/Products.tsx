import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { useCart } from "../Context/CartContetxt";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  category?: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());
  const { cart, addToCart } = useCart();

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    if (response.ok == false) {
      setError("Error while loading products");
    } else {
      const data = await response.json();
      setProducts(data.products);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddToCart = (product: Product) => {
    addToCart({ id: product.id, title: product.title, price: product.price });
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1200);
  };

  return (
    <div className="products-root">
      <header className="products-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-text">
              SK<span className="logo-accent">POINT</span>
            </span>
          </Link>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products-search" className="nav-link active">
              Shop
            </Link>
            <a href="#" className="nav-link">
              Features
            </a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Link
              to="/cart"
              className="icon-btn"
              aria-label="Cart"
              style={{ position: "relative", textDecoration: "none" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>
            <Link to="/" className="btn-primary-nav">
              ← Back
            </Link>
          </div>
        </div>
      </header>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </div>
          <h1 className="page-hero-title">
            Our <em>Collection</em>
          </h1>
          <p className="page-hero-desc">
            Browse {products.length > 0 ? `${products.length}+` : ""} products —
            quality guaranteed.
          </p>
        </div>
      </div>

      <main className="products-main">
        <div className="products-inner">
          <div className="search-row">
            <div className="search-wrap">
              <svg
                className="search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                placeholder="Search products..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="search-clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {error && (
            <div className="state-box error-box">
              Failed to load products. Please try again.
            </div>
          )}

          {loading && !error && (
            <div className="state-box">
              <div className="spinner" />
              Loading products...
            </div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="state-box">
              <span style={{ fontSize: "2.5rem" }}>🔍</span>
              <p>
                No products found for "<strong>{searchTerm}</strong>"
              </p>
              <button
                className="btn-ghost-sm"
                onClick={() => setSearchTerm("")}
              >
                Clear search
              </button>
            </div>
          )}

          {!loading && !error && filteredProducts.length > 0 && (
            <div className="products-grid">
              {filteredProducts.map((product) => {
                const productAdded = addedIds.has(product.id);
                return (
                  <div className="product-card" key={product.id}>
                    <div className="product-img-wrap">
                      {product.thumbnail && (
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="product-img"
                        />
                      )}
                    </div>

                    <div className="product-body">
                      {product.category && (
                        <span className="product-category">
                          {product.category}
                        </span>
                      )}
                      <h3 className="product-title">{product.title}</h3>
                      <div className="product-footer">
                        <span className="product-price">${product.price}</span>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button
                            onClick={() => handleAddToCart(product)}
                            aria-label="Add to cart"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 5,
                              padding: "6px 12px",
                              borderRadius: 8,
                              border: "none",
                              cursor: "pointer",
                              fontSize: 12,
                              fontWeight: 600,
                              transition: "background 0.2s, transform 0.15s",
                              background: productAdded ? "#16a34a" : "#1d4ed8",
                              color: "#fff",
                              transform: productAdded ? "scale(0.96)" : "scale(1)",
                            }}
                          >
                            {productAdded ? (
                              <>✓ Added To Cart</>
                            ) : (
                              <>
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                  <line x1="3" y1="6" x2="21" y2="6" />
                                  <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                                Add
                              </>
                            )}
                          </button>
                          {/* <Link
                            to={`/products/${product.id}`}
                            className="btn-view"
                          >
                            Details
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <footer className="products-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text">
                SK<span className="logo-accent">POINT</span>
              </span>
            </Link>
            <p className="footer-tagline">Premium shopping, made simple.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SkPoint. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
export default ProductList;
