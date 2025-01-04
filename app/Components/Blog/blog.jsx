import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-heading">Our Blog</h2>
      <h3 className="blog-subheading">Latest News</h3>

      {/* First Grid */}
      <div className="blog-grid">
        <div className="blog-card large">
          <div className="date-tag">20 APR</div>
          <h4 className="blog-title">The Covid-19 Epidemic In 2022 Is Back</h4>
          <img src="/img/blog3-450x580.jpg.png" alt="Blog Post 1" className="blog-image" />
        </div>
        <div className="blog-card small">
          <div className="date-tag">20 APR</div>
          <h4 className="blog-title">The Covid-19 Epidemic In 2023 Is Back</h4>
          <img src="/img/blog3-450x580.jpg.png" alt="Blog Post 2" className="blog-image" />
        </div>
        <div className="blog-card large">
          <div className="date-tag">17 MAR</div>
          <h4 className="blog-title">Hac hendrerit mus nons semper suspendisse</h4>
          <img src="/img/blog3-450x580.jpg.png" alt="Blog Post 3" className="blog-image" />
        </div>
        <div className="blog-card small">
          <div className="date-tag">15 MAR</div>
          <h4 className="blog-title">Turmeric & Ginger Benefits Explored</h4>
          <img src="/img/blog3-450x580.jpg.png" alt="Blog Post 4" className="blog-image" />
        </div>
      </div>

      {/* Second Grid */}
      <div className="blog-grid reverse">
        <div className="blog-card small">
          <div className="date-tag">10 MAR</div>
          <h4 className="blog-title">New Health Supplement Launched</h4>
          <img src="/img/blog2-450x580.jpg.png" alt="Blog Post 5" className="blog-image" />
        </div>
        <div className="blog-card large">
          <div className="date-tag">08 MAR</div>
          <h4 className="blog-title">Understanding Vitamin C Supplements</h4>
          <img src="/img/blog2-450x580.jpg.png" alt="Blog Post 6" className="blog-image" />
        </div>
        <div className="blog-card small">
          <div className="date-tag">05 MAR</div>
          <h4 className="blog-title">Tips for a Healthy Lifestyle</h4>
          <img src="/img/blog2-450x580.jpg.png" alt="Blog Post 7" className="blog-image" />
        </div>
        <div className="blog-card large">
          <div className="date-tag">01 MAR</div>
          <h4 className="blog-title">The Rise of Herbal Supplements</h4>
          <img src="/img/blog2-450x580.jpg.png" alt="Blog Post 8" className="blog-image" />
        </div>
      </div>
    </div>
  );
};

export default Blog;



