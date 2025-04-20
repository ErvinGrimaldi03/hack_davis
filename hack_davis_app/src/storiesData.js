import FeatStory1Img from './images/featStory1.png'
import FeatStory2Img from './images/featStory2.png'

// Sample data for stories
const storiesData = [
    {
      id: 1,
      title: "The Future of Renewable Energy",
      date: "2025-04-15",
      category: "Shelter",
      topic: "Sustainability",
      imageUrl: FeatStory1Img,
      featured: true,
      content: "Renewable energy sources are becoming increasingly important as we move towards a more sustainable future. This article explores the latest developments in solar, wind, and hydro technologies, as well as the policies being implemented globally to encourage their adoption. With climate change accelerating, the shift to renewable energy has never been more critical."
    },
    {
      id: 2,
      title: "Advancements in Artificial Intelligence",
      date: "2025-04-12",
      category: "Shelter",
      topic: "AI",
      imageUrl: FeatStory2Img,
      featured: true,
      content: "AI continues to transform industries across the globe. From healthcare to transportation, discover how machine learning algorithms are revolutionizing our world. This article examines recent breakthroughs in natural language processing, computer vision, and reinforcement learning, highlighting their potential impact on society and the economy."
    },
    {
      id: 3,
      title: "The Benefits of Meditation",
      date: "2025-04-10",
      category: "Displacement",
      topic: "Wellbeing",
      imageUrl: FeatStory2Img,
      featured: true,
      content: "Studies show that regular meditation practice can reduce stress, improve focus, and promote emotional well-being. Learn how to incorporate mindfulness into your daily routine with these simple techniques. This article explores different meditation styles, their origins, and the scientific evidence supporting their health benefits."
    },
    {
      id: 4,
      title: "Exploring Mars: The Next Frontier",
      date: "2025-04-08",
      category: "Unemployment",
      topic: "Exploration",
      imageUrl: FeatStory2Img,
      featured: true,
      content: "As missions to Mars become more frequent, scientists are uncovering fascinating details about the red planet. This article examines recent discoveries and what they mean for future exploration. From water ice beneath the surface to evidence of ancient rivers, our understanding of Mars is evolving rapidly, paving the way for potential human settlement in the coming decades."
    },
    {
      id: 5,
      title: "The Rise of Remote Work",
      date: "2025-04-05",
      category: "Counseling",
      topic: "Workplace",
      imageUrl: FeatStory2Img,
      featured: true,
      content: "The pandemic accelerated the shift to remote work, and many companies are continuing to embrace flexible work arrangements. Discover the benefits and challenges of this new work paradigm, from increased productivity and work-life balance to the struggle of maintaining company culture and preventing burnout in a distributed workforce."
    },
    {
      id: 6,
      title: "Sustainable Fashion Trends",
      date: "2025-04-03",
      category: "Basic Needs",
      topic: "Sustainability",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "The fashion industry is embracing sustainability with innovative materials and ethical production methods. Learn about the designers leading this movement and how consumers can make more environmentally conscious choices. From recycled fabrics to zero-waste manufacturing, sustainable fashion is redefining what it means to be stylish in the 21st century."
    },
    {
      id: 7,
      title: "Modern Approaches to Mental Health",
      date: "2025-03-28",
      category: "Shelter",
      topic: "Wellbeing",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "As awareness of mental health issues grows, new therapeutic approaches are gaining recognition. This article explores cutting-edge treatments, from psychedelic-assisted therapy to digital interventions, and how they're changing our understanding of mental wellness. The integration of technology, neuroscience, and psychology is opening new frontiers in mental health care."
    },
    {
      id: 8,
      title: "The Evolution of Cryptocurrency",
      date: "2025-03-25",
      category: "Unemployment",
      topic: "Blockchain",
      imageUrl: FeatStory2Img,
      featured: false,
      content: "From Bitcoin to decentralized finance, cryptocurrency has come a long way since its inception. This article traces its development and potential future impact on global financial systems. As central banks experiment with digital currencies and blockchain technology matures, the landscape of money itself is being reimagined for the digital age."
    },
    {
      id: 9,
      title: "Breakthrough in Quantum Computing",
      date: "2025-03-22",
      category: "Counseling",
      topic: "Quantum",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "Scientists have achieved a major milestone in quantum computing, bringing us one step closer to solving previously intractable problems. This article explains the significance of this breakthrough and its potential applications in cryptography, drug discovery, and materials science. The race for quantum advantage is accelerating, with implications for every field from medicine to artificial intelligence."
    },
    {
      id: 10,
      title: "Ocean Conservation Initiatives",
      date: "2025-03-18",
      category: "Basic Needs",
      topic: "Sustainability",
      imageUrl: FeatStory2Img,
      featured: false,
      content: "Organizations around the world are implementing innovative strategies to protect marine ecosystems. Discover the latest conservation projects and how they're making a difference. From marine protected areas to plastic pollution reduction technologies, these initiatives are crucial in preserving ocean biodiversity for future generations."
    },
    {
      id: 11,
      title: "The Science of Sleep",
      date: "2025-03-15",
      category: "Unemployment",
      topic: "Wellbeing",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "Recent research has shed new light on the importance of quality sleep for overall health. Learn about sleep cycles, common disorders, and evidence-based strategies for improving your rest. Scientists are uncovering connections between sleep and everything from immune function to cognitive performance, revealing sleep as a cornerstone of wellness."
    },
    {
      id: 12,
      title: "Next Generation Solar Technology",
      date: "2025-03-12",
      category: "Loans",
      topic: "Sustainability",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "Breakthroughs in materials science are revolutionizing solar panel efficiency and cost. This article explores these innovations and their potential to accelerate renewable energy adoption worldwide. From perovskite cells to transparent solar windows, these technologies promise to transform how and where we generate clean electricity."
    },
    {
      id: 13,
      title: "The Art of Urban Gardening",
      date: "2025-03-08",
      category: "Lifestyle",
      topic: "Sustainability",
      imageUrl: FeatStory2Img,
      featured: false,
      content: "City dwellers are turning to creative gardening solutions to bring nature into urban environments. Get inspired by these innovative approaches to growing food and plants in limited spaces. From vertical gardens to community plots, urban gardening is fostering sustainability, community connections, and improved mental wellbeing in concrete landscapes."
    },
    {
      id: 14,
      title: "Rethinking Education for the Digital Age",
      date: "2025-03-05",
      category: "Counseling",
      topic: "Innovation",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "Educational institutions are adapting to prepare students for a rapidly changing world. This article examines new teaching methodologies and curriculum changes designed to foster creativity, critical thinking, and digital literacy. The integration of technology, project-based learning, and personalized education pathways is transforming how we approach learning at all levels."
    },
    {
      id: 15,
      title: "The Future of Transportation",
      date: "2025-03-01",
      category: "Shelter",
      topic: "Mobility",
      imageUrl: FeatStory1Img,
      featured: false,
      content: "From electric vehicles to hyperloop systems, transportation is undergoing a revolutionary transformation. Explore the innovations that will shape how we move people and goods in the coming decades. Autonomous vehicles, sustainable aviation, and smart infrastructure are converging to create transportation systems that are cleaner, safer, and more efficient than ever before."
    }
  ];
  
  export default storiesData;