import React from 'react';

const RepositoryCard = ({ repo }) => {
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      {/* More details here as needed */}
    </div>
  );
};

export default RepositoryCard;