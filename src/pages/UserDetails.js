import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserInfo, fetchUserRepositories } from '../services/githubAPI';
import UserInfoCard from '../components/UserInfoCard';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Pagination from '../components/Pagination';

const parseLinkHeader = (linkHeader) => {
  if (!linkHeader) return null;

  const links = {};
  linkHeader.split(',').forEach((link) => {
    const [url, rel] = link.split(';');
    const relValue = rel.replace(/"/g, '').replace('rel=', '').trim();
    const urlValue = url.slice(1, -1).replace("<", ""); // Remove angle brackets from URL
    links[relValue] = urlValue;
  });

  return links;
};

const UserDetails = () => {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [linkHeader, setLinkHeader] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [pageUrl, setPageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserInfo(username);
        setUserInfo(user);

        const repos = await fetchUserRepositories(username, pageUrl);
        setRepositories(repos.data);
        setLinkHeader(repos.headers.link);
      } catch (error) {
        // Handle error
        setError(true);
      }
    };

    fetchData();
  }, [username, pageUrl]);

  const onPageChange = (event) => {
    if (event) {
      setPageUrl(event);
    }
  };

  if (error) {
    return <div>Unable to retrieve user information. Please check if the username is valid.</div>;
  }
  else if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserInfoCard username={userInfo.login} profileUrl={userInfo.avatar_url} />
      <br></br>
      <DataTable value={repositories} onPage={onPageChange}>
        <Column field="name" header="Name" />
        <Column field="description" header="Description" />
        {/* Add more columns as needed */}
        <Column
          body={(rowData) => (
            <a href={rowData.html_url} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          )}
        />
      </DataTable>
      <Pagination onPageChange={onPageChange} links={parseLinkHeader(linkHeader)}></Pagination>
    </div>
  );
};

export default UserDetails;