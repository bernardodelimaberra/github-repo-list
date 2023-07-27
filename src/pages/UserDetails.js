import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserInfo, fetchUserRepositories } from '../services/githubAPI';
import UserInfoCard from '../components/UserInfoCard';
import RepositoryCard from '../components/RepositoryCard';
import Pagination from '../components/Pagination';

const UserDetails = () => {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserInfo(username);
        setUserInfo(user);

        const repos = await fetchUserRepositories(username, currentPage);
        setRepositories(repos);
        setTotalPages(Math.ceil(repos.length / 10)); // Assuming 10 repositories per page
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [username, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserInfoCard username={userInfo.login} profileUrl={userInfo.html_url} />
      {repositories.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
      <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default UserDetails;