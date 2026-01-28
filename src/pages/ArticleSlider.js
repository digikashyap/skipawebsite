import { useEffect, useState } from "react";
import "../assets/styles/ArticleSlider.css";

const articles = [
  "Patterns Of Power In Trump’s Presidency",
  "Churchill Misrepresented",
  "Why Europe Needs Its Own Nuclear Deterrent",
  "Francis Fukuyama On State Capacity",
  "Global Politics Today",
  "Economic Strategy",
  "World Security",
  "Future of Democracy"
];

const truncateWords = (text, limit = 5) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

export default function ArticleSlider() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 4;

  // Auto change every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerSlide) % articles.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - itemsPerSlide < 0
        ? articles.length - itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  // Visible 4 articles only
  const visibleArticles = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleArticles.push(articles[(index + i) % articles.length]);
  }

  return (
    <div className="bg-light my-0">
      <div className="d-flex align-items-center ml-2 position-relative">

        <div className="article-topic me-2">
          <button className="btn-danger">Featuring</button>
        </div>

        {/* Articles */}
        <div className="overflow-hidden w-100">
          <div className="d-flex fade-track">
            {visibleArticles.map((item, i) => (
              <div
                className="col-12 col-md-6 col-lg-3 p-2 article-item fade-item"
                key={i}
              >
                <a href="#" className="article-link">
                  <small className="text-danger fw-bold">ARTICLES</small>
                  <p className="fw-bold mt-2 mb-0">
                    {truncateWords(item, 5)}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          className="btn btn-outline-dark me-2 rounded-circle arrow-btn"
          onClick={prevSlide}
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          className="btn btn-outline-dark rounded-circle arrow-btn"
          onClick={nextSlide}
        >
          &#8594;
        </button>

      </div>
    </div>
  );
}
