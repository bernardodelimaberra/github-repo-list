import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserInfo = async (username) => {
  const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
  return response.data;
};

export const fetchUserRepositories = async (username, page = 1, perPage = 10) => {
  const response = await axios.get(
    `${GITHUB_API_BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}`
  );
  return response.data;
};