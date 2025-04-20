import React from 'react';
import FeaturedStoriesCarousel from './FeaturedStoriesCarousel';

// Sample stories data
const storiesData = [
  {
    id: 1,
    title: "From Backer to community hero",
    date: "April 15, 2025",
    category: "Environment",
    imageUrl: "https://via.placeholder.com/400x300",
    content: "Renewable energy sources are becoming increasingly important as we move towards a more sustainable future. This article explores the latest developments in solar, wind, and hydro technologies."
  },
  {
    id: 2,
    title: "Advancements in Artificial Intelligence",
    date: "April 12, 2025",
    category: "Technology",
    imageUrl: "https://via.placeholder.com/400x300",
    content: "AI continues to transform industries across the globe. From healthcare to transportation, discover how machine learning algorithms are revolutionizing our world."
  },
  {
    id: 3,
    title: "The Benefits of Meditation",
    date: "April 10, 2025",
    category: "Health",
    imageUrl: "https://via.placeholder.com/400x300",
    content: "Studies show that regular meditation practice can reduce stress, improve focus, and promote emotional well-being. Learn how to incorporate mindfulness into your daily routine."
  },
  {
    id: 4,
    title: "Exploring Mars: The Next Frontier",
    date: "April 8, 2025",
    category: "Space",
    imageUrl: "https://via.placeholder.com/400x300",
    content: "As missions to Mars become more frequent, scientists are uncovering fascinating details about the red planet. This article examines recent discoveries and what they mean for future exploration."
  },
  {
    id: 5,
    title: "The Rise of Remote Work",
    date: "April 5, 2025",
    category: "Business",
    imageUrl: "https://via.placeholder.com/400x300",
    content: "The pandemic accelerated the shift to remote work, and many companies are continuing to embrace flexible work arrangements. Discover the benefits and challenges of this new work paradigm."
  }
];

function Stories() {
  return (
    <div className="stories-container">
      <h1>Featured Stories</h1>
      <FeaturedStoriesCarousel stories={storiesData} />
    </div>
  );
}

export default Stories;