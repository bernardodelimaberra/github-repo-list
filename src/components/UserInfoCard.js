import React from 'react';
import { Card } from 'primereact/card';

const UserInfoCard = ({ username, profileUrl }) => {
  const header = <img alt="Avatar" src={profileUrl} style={{ width: '100px', borderRadius: '50%' }} />;
  return (
    <Card title={username} header={header}>
      <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </Card>
  );
};

export default UserInfoCard;