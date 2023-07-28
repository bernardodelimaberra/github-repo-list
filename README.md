# GitHub User Repository List

## Overview

The GitHub User Repository List is a small web application that allows users to view a list of repositories for a given GitHub user. It fetches data from the GitHub API to display the repositories and provides pagination to navigate through the repositories.

## Table of Contents

- [Environment](#environment)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Environment

This project is built using React and utilizes the GitHub API to fetch user and repository data. The app uses the React Router for handling routing and PrimeReact for UI components.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-repo-list.git

2. Navigate to the project directory:

    cd github-repo-list

3. Install dependencies:

    npm install

4. Start the development server:

    npm start

5. Open your browser and visit http://localhost:3000/user/username to access the app.

## Usage

Enter a GitHub username in the URL path (e.g., http://localhost:3000/user/bernardodelimaberra) to view the repositories for that user.

The repositories will be displayed in a paginated table with the option to navigate through pages using the pagination controls.

![image](https://github.com/bernardodelimaberra/github-repo-list/assets/135295173/cda84f8d-5ec5-4cb2-876e-a86a484a35c9)

## Technologies Used

- React
- React Router
- PrimeReact (DataTable, Paginator)
- Axios (for API calls)
