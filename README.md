# Netflix-GPT

A Netflix clone with GPT-powered search and personalized suggestions. Built using React, Firebase authentication, and the Google Gemini API.

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [API Integration](#api-integration)  
- [Credits](#credits)  

## Features

### Authentication  
- **Login & Sign Up** pages  
- Form validation for email and password fields  
- Firebase Authentication for user sign-in, sign-up, and logout  
- Redirect to Browse page upon successful authentication  

### Browse Page  
- **Header** with navigation and user profile/logout  
- **VideoBackground** component playing featured trailer in the background  
- **VideoInfo** overlay showing title, description, and action buttons  
- **MovieList** sections for:
  - Now Playing  
  - Popular  
  - Top Rated  
  - Upcoming  
- **MovieCard** components displaying poster, title, and rating  
- **Responsive layout** with Tailwind CSS  

### Netflix GPT  
- **GPTSearchBar** for natural-language queries  
- **GPTSearch** page with language selection  
- **GPTMovieSuggestions** displaying GPT-recommended titles  
- Integration with Google Gemini API (`@google/genai`) for query processing  
- **Multi-language support** via language constants and Redux config slice  

### State Management  
- **Redux Toolkit** store configuration (`appStore.js`)  
- Slices for:
  - `moviesSlice` (fetched movie lists)  
  - `userSlice` (authentication state)  
  - `gptSlice` (GPT query results)  
  - `configSlice` (language selection)  

### Custom Hooks & Utilities  
- **useNowPlayingMovies**, **usePopularMovies**, **useTopRatedMovies**, **useUpcomingMovies** for TMDB API data  
- **useMovieTrailer** to fetch and play movie trailers  
- **constants.js** for API endpoints and keys  
- **gemini.js** wrapper for Gemini API calls  
- **validate.js** for form input validation  
- **firebase.js** for Firebase initialization  

### Development Tools & Configuration  
- **Parcel.js** as bundler with zero-config HMR, caching, code splitting, and production optimizations  
- **Babel** for JSX and modern JavaScript  
- **PostCSS & Tailwind CSS** for utility-first styling  
- **Jest & React Testing Library** setup for unit tests  
- **Browserslist** targeting last 2 versions  

## Tech Stack

- **React** 19.1.0  
- **React DOM** 19.1.0  
- **React Router DOM** 6.30.0  
- **Redux Toolkit** 2.6.1 & **React Redux** 9.2.0  
- **Firebase** 11.6.0  
- **@google/genai (Gemini API)** 0.8.0  
- **Parcel** 2.14.4  
- **Tailwind CSS** 4.1.3  
- **Jest** 29.7.0 & **React Testing Library** 16.3.0  
- **Babel** 7.26.x  

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/bharatsinghani4/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start development server**

   ```
   npm start
   ```

4. **Run tests**

   ```
   npm test
   ```

5. **Build for production**

   ```
   npm run build
   ```

## API Integration

- **The Movie Database (TMDB) API** for movie lists and details
- If you are accessing TMDB from India, you will need a VPN since TMDB is not available in India.
- If you are accessing TMDB from any other countery, make sure to check the availability of TMDB in your country.
- **Google Gemini API** via `@google/genai` for GPT-powered search  

> **Note**: Ensure you add your Firebase config and Gemini API credentials in `src/utils/firebase.js` and environment variables as needed.

## Credits

Built by **Bharat Singhani**. Inspired by Netflix’s UI/UX and enhanced with GPT search capabilities using Google Gemini.  
