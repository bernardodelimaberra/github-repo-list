import React from 'react';
import { Card } from 'primereact/card';

const RepositoryCard = ({ repo }) => {
  return (
    <Card title={repo.name}>
      <p>{repo.description}</p>
      {/* Add more details as needed */}
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </Card>
  );
};

export default RepositoryCard;