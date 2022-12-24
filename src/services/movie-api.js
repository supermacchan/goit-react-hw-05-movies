import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '69fc77f6620d7e54166b698911b2babb';
const TRENDING = '/trending/movie/day';

async function fetchTrending() {
    try {
        const fetchUrl = `${ BASE_URL }${TRENDING}?api_key=${API_KEY}`;
        const response = await axios.get(fetchUrl);

        if (response) {
            // console.log(response.data.results);
            return response.data.results;
        }

        return Promise.reject(
            new Error('Oops! Something went wrong...')
        );
    } catch (error) {
        return error;
    }
};

export const movieAPI = {
    fetchTrending,
};