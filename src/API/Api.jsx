import axios from 'axios'
const apiKey = '802712c8bad18fed91462bf1a55b27d1'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const Params = {
    trending: 'trending/all/day',
    search: 'search/movie',
    movieID: 'movie/',
    reviews: '/reviews',
    credits: '/credits',
}

export const trendingMoviesFetch = async() => {
    const response = await axios.get(`/${Params.trending}?api_key=${apiKey}`)
    return response.data.results
}

export const searchMovieFetch = async query => {
    const response = await axios.get(`/${Params.search}?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`)
 return response.data.results
}

export const movieIDFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}?api_key=${apiKey}&language=en-US`)
    return response.data
}

export const reviewFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}${Params.reviews}?${apiKey}&language=en-US`)
    return response.data.results
}

export const creditsFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}${Params.credits}?${apiKey}&language=en-US`)
    return response.data.cast
}


