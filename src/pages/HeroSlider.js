import { useEffect, useState } from "react";

import "../assets/styles/HeroSlider.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "WELCOME TO THE",
    heading: "HOOVER INSTITUTION",
    text: "Ideas Advancing Freedom",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title: "WELCOME TO THE",
    heading: "FREE SOCIETY",
    text: "Advancing ideas for humanity",
  },
  {
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    title: "WELCOME TO THE",
    heading: "GLOBAL THINKERS",
    text: "Securing peace for mankind",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>

          <div className="hero-content container">
            <h5>{slide.title}</h5>
            <h1>{slide.heading}</h1>
            <p>{slide.text}</p>
            <button className="btn btn-light rounded-pill px-4">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
