import React from 'react';
import './Resources.css';

const resourcesData = [
  {
    id: 1,
    title: "Home Disaster Loans",
    organization: "U.S. Small Business Administration",
    link: "https://www.sba.gov/funding-programs/disaster-assistance",
    logoUrl: "https://oregoncoast.edu/wp-content/uploads/2024/11/SBA-logo.png", 
  },
  {
    id: 2,
    title: "Home Disaster Loans",
    organization: "U.S. Small Business Administration",
    link: "https://www.sba.gov/funding-programs/disaster-assistance",
    logoUrl: "https://oregoncoast.edu/wp-content/uploads/2024/11/SBA-logo.png",
  },
  {
    id: 3,
    title: "Home Disaster Loans",
    organization: "U.S. Small Business Administration",
    link: "https://www.sba.gov/funding-programs/disaster-assistance",
    logoUrl: "https://oregoncoast.edu/wp-content/uploads/2024/11/SBA-logo.png",
  },
  {
    id: 4,
    title: "Home Disaster Loans",
    organization: "U.S. Small Business Administration",
    link: "https://www.sba.gov/funding-programs/disaster-assistance",
    logoUrl: "https://oregoncoast.edu/wp-content/uploads/2024/11/SBA-logo.png",
  }
];

function Resources() {
  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources</h1>
      <div className="resources-title-underline"></div>
      
      <div className="resources-grid">
        {resourcesData.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="resource-logo">
              <img src={resource.logoUrl} alt={`${resource.organization} logo`} />
            </div>
            <div className="resource-info">
              <h2 className="resource-title">{resource.title}</h2>
              <p className="resource-organization">{resource.organization}</p>
              <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                Click to Learn More <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;