import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserInfo = async (username) => {
  const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
  return response.data;
};

export const fetchUserRepositories = async (username, pageUrl, page = 1, perPage = 5) => {
  if (pageUrl) {
    const response = await axios.get(pageUrl);
    return response;
  }
  
  const response = await axios.get(
    `${GITHUB_API_BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}`
  );
  return response;
};