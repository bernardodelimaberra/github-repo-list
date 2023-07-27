import React from 'react';

const UserInfoCard = ({ username, profileUrl }) => {
  return (
    <div>
      <h2>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          {username}
        </a>
      </h2>
    </div>
  );
};

export default UserInfoCard;