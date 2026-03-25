import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-root">
      <header className="home-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">
              SK<span className="logo-accent">POINT</span>
            </span>
          </Link>

          <nav className="main-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/products-search" className="nav-link">
              Shop
            </Link>
            <a href="#features" className="nav-link">
              Features
            </a>
          </nav>

          <div className="header-actions">
            {/* <button className="icon-btn" aria-label="Search">
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
            </button> */}
            <button className="icon-btn" aria-label="Cart">
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
              <span className="cart-badge">3</span>
            </button>
            <Link to="/products-search" className="btn-primary-nav">
              Shop Now
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <span className="hero-label">New Season · 2026 Collection</span>
          <h1 className="hero-title">
            Discover Products
            <br />
            <em>Worth Wanting</em>
          </h1>
          <p className="hero-subtitle">
            Curated selections of premium goods — from everyday essentials to
            statement pieces. Quality you can trust, style you'll love.
          </p>
          <div className="hero-cta">
            <Link to="/products-search" className="btn-hero-primary">
              Explore Collection
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="#features" className="btn-hero-ghost">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">10K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Brands</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <div className="hcard-img-wrap">
              <img
                src="https://dummyjson.com/image/400x300/1a1a2e/c8a96e?text=Featured"
                alt="Featured"
              />
            </div>
            <div className="hcard-body">
              <span className="hcard-tag">Trending</span>
              <p className="hcard-title">Premium Collection</p>
              <p className="hcard-price">From $29.99</p>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <div className="hcard-img-wrap">
              <img
                src="https://dummyjson.com/image/400x300/1a1a2e/c8a96e?text=Sale"
                alt="Sale"
              />
            </div>
            <div className="hcard-body">
              <span className="hcard-tag sale">Sale</span>
              <p className="hcard-title">Top Deals</p>
              <p className="hcard-price">Up to 40% off</p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <Link to="/products-search" className="see-all">
              View All →
            </Link>
          </div>
          <div className="cat-grid">
            {[
              { icon: "💻", name: "Electronics", count: "120+" },
              { icon: "👗", name: "Fashion", count: "340+" },
              { icon: "🏠", name: "Home & Living", count: "210+" },
              { icon: "💄", name: "Beauty", count: "95+" },
              { icon: "🏋️", name: "Sports", count: "180+" },
              { icon: "📚", name: "Books", count: "500+" },
            ].map((cat) => (
              <Link to="/products-search" className="cat-card" key={cat.name}>
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count} items</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-header centered">
            <span className="section-eyebrow">Why LuxeMart</span>
            <h2 className="section-title">Shopping, Elevated</h2>
            <p className="section-desc">
              We combine the best products with an exceptional experience — from
              browse to delivery.
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Secure Payments",
                desc: "Bank-grade encryption on every transaction. Shop with complete confidence.",
              },
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                ),
                title: "Fast Delivery",
                desc: "Express shipping on thousands of products. Same-day delivery available.",
              },
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                ),
                title: "Easy Returns",
                desc: "30-day hassle-free returns. No questions asked, no restocking fees.",
              },
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                ),
                title: "Curated Quality",
                desc: "Every product is hand-picked and quality-checked by our expert team.",
              },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Start Shopping?</h2>
          <p className="cta-desc">
            Thousands of products waiting to be discovered.
          </p>
          <Link to="/products-search" className="btn-hero-primary">
            Shop the Collection
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">
                SK<span className="logo-accent">POINT</span>
              </span>
            </Link>
            <p className="footer-tagline">Premium shopping, made simple.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 LuxeMart. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
export default Home;