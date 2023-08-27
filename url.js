export const API = {
    BASE_URL: "https://web.com",
    AUTH: {
        LOGIN: '/login'
    }
}

const BASE_URL = "http://example.com"
const MOVIES = "movies.json"

async function logMovies() {
    const response = await fetch(`${BASE_URL}${MOVIES}`);
    const movies = await response.json();
    console.log(movies);
}