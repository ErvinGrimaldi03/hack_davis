// storiesData.js - A central place to store your stories data
import immagine from './images/featStory1.png'
import imagine2 from './images/featStory2.png'


export const storiesEvidenti = [
    {
        id: 1,
        title: "After the Fire: Sal's Journey to Rebuild His LA Car Shop",
        date: "November 20, 2018",
        category: "Small Business",
        location: "Butte County, CA",
        author: "Sal, 50",
        imageUrl: immagine,
        content: "Sal, a 50-year-old small business owner, had devoted 35 years to running \"Sal's Motors\" in Butte County, California. His shop was a trusted local fixture, known for honest work and a welcoming atmosphere. On November 17, 2018, Sal's world was turned upside down when the devastating Camp Fire swept through Butte County. The fire, caused by damaged power lines, destroyed nearly 800 structures, including Sal's beloved auto shop, and displaced 500 local community homes.\n\nIn the aftermath, Sal faced the difficult task of rebuilding his life and business from scratch. He turned to government resources for help, applying for a Small Business Administration (SBA) disaster loan to replace lost equipment and inventory. Sal also received assistance from the Rebuild Paradise Foundation, a local organization in Butte County which helped him navigate the recovery process and access available grants.\n\nDespite the immense challenges, Sal's determination and the support he received helped him take the first steps toward recovery. His story is a testament to the resilience of small business owners and the importance of disaster relief in helping communities heal after such devastating loss.",
        shortQuote: "The SBA disaster loan helped me replace the equipment I lost and start over again.",
        resources: [
          {
            name: "Small Business Administration",
            link: "https://www.sba.gov/",
            description: "Provides disaster loans and assistance for small businesses affected by disasters"
          },
          {
            name: "Rebuild Paradise Foundation",
            link: "https://www.rebuildparadise.org/",
            description: "Supports Butte County residents and businesses in recovery efforts"
          }
        ],
        tags: ["small business", "fire recovery", "disaster relief", "california"]
      },
      {
        id: 2,
        title: "From Backer to Community Hero",
        date: "April 15, 2025",
        category: "Environment",
        location: "Palisades, CA",
        author: "Anonymous, 45",
        imageUrl: imagine2,
        content: "Renewable energy sources are becoming increasingly important as we move towards a more sustainable future. This article explores the latest developments in solar, wind, and hydro technologies.",
        shortQuote: "Local volunteers helped feed our entire neighborhood for weeks after the disaster.",
        resources: []
      },
      {
        id: 3,
        title: "Advancements in Artificial Intelligence",
        date: "April 12, 2025",
        category: "Technology",
        location: "Palisades, CA",
        author: "Anonymous, 45",
        imageUrl: "https://via.placeholder.com/400x300",
        content: "AI continues to transform industries across the globe. From healthcare to transportation, discover how machine learning algorithms are revolutionizing our world.",
        shortQuote: "The emergency housing support gave us time to figure out our next steps.",
        resources: []
      },
      {
        id: 4,
        title: "The Benefits of Meditation",
        date: "April 10, 2025",
        category: "Health",
        location: "Palisades, CA",
        author: "Anonymous, 45",
        imageUrl: "https://via.placeholder.com/400x300",
        content: "Studies show that regular meditation practice can reduce stress, improve focus, and promote emotional well-being. Learn how to incorporate mindfulness into your daily routine.",
        shortQuote: "Mental health support was crucial in those first few weeks after we lost everything.",
        resources: []
      },
      {
        id: 5,
        title: "Exploring Mars: The Next Frontier",
        date: "April 8, 2025",
        category: "Space",
        location: "Palisades, CA",
        author: "Anonymous, 45",
        imageUrl: "https://via.placeholder.com/400x300",
        content: "As missions to Mars become more frequent, scientists are uncovering fascinating details about the red planet. This article examines recent discoveries and what they mean for future exploration.",
        shortQuote: "Community support networks were essential to our family's recovery.",
        resources: []
      }
    ];
    
    // Resources data for the Resources component
    export const resourcesData = [
      {
        id: 101,
        title: "Home Disaster Loans",
        organization: "U.S. Small Business Administration",
        category: "Financial Aid",
        link: "https://www.sba.gov/funding-programs/disaster-assistance",
        logoText: "SBA"
      },
      {
        id: 102,
        title: "Small Business Recovery Grants",
        organization: "U.S. Small Business Administration",
        category: "Financial Aid",
        link: "https://www.sba.gov/funding-programs/disaster-assistance",
        logoText: "SBA"
      },
      {
        id: 103,
        title: "Rebuild Paradise Foundation",
        organization: "Community Organization",
        category: "Local Support",
        link: "https://www.rebuildparadise.org/",
        logoText: "RPF"
      },
      {
        id: 104,
        title: "Disaster Recovery Assistance",
        organization: "U.S. Small Business Administration",
        category: "Business Support",
        link: "https://www.sba.gov/funding-programs/disaster-assistance",
        logoText: "SBA"
      }
  ];