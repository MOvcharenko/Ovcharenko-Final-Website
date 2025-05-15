// Fetch homepage sections and display heading and review titles
fetch("data/sections.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("hero-heading").textContent = data.headerText;
    document.getElementById("hero-button").textContent = data.heroButtonText;
    document.getElementById("featured-heading").textContent = data.featuredTagline;
    document.getElementById("reviews-heading").textContent = data.reviewsTagline;
  })
  .catch((err) => {
    //document.getElementById("hero-heading").textContent = "Error loading data.";
    console.error("Sections.json failed:", err);
  });

fetch("data/products.json")
  .then((res) => res.json())
  .then((products) => {
        renderFeaturedProducts(products);
        renderProductReviews(products);
  })
  .catch((err) => {
    const container = document.getElementById("product-list");
    container.textContent = "Error loading products.";
    console.error("Products.json failed:", err);
  });

  function renderFeaturedProducts(products) {
    const container = document.getElementById("product-list");
    if (!container) return;
    const featured = products.slice(0, 4);
    featured.forEach((product) => {
      const card = document.createElement("div");
      card.className = "game-card";

      const img = document.createElement("img");
      img.src = product.imageUrl;
      img.alt = product.title;
    
      card.appendChild(img);
      
      container.appendChild(card);
    });
  }

  function renderProductReviews(products) {
    const reviewsContainer = document.getElementById("reviews-container");
    if (!reviewsContainer) return;
    const reviewedProducts = products.slice(0, 4);
    
    reviewedProducts.forEach(product => {
      const reviewCard = document.createElement("article");
      reviewCard.className = "review-card";
  
      const img = document.createElement("img");
      img.src = product.imageUrl;
      img.alt = `${product.title} review image`;
  
      const textContainer = document.createElement("div");
      textContainer.className = "review-text-container";

      const reviewText = document.createElement("p");
      reviewText.className = "review-text";
      reviewText.textContent = `"${product.review}"`;
  
      textContainer.appendChild(reviewText);
      
      reviewCard.appendChild(img);
      reviewCard.appendChild(textContainer);
      reviewsContainer.appendChild(reviewCard);
    });
  }