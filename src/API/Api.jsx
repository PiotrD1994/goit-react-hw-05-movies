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

const trendingMoviesFetch = async() => {
    const response = await axios.get(`/${Params.trending}?api_key=${apiKey}`)
    return response.data.results
}

const searchMovieFetch = async query => {
    const response = await axios.get(`/${Params.search}?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`)
 return response.data.results
}

const movieIDFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}?api_key=${apiKey}&language=en-US`)
    return response.data
}

const reviewFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}${Params.reviews}?${apiKey}&language=en-US`)
    return response.data.results
}

const creditsFetch = async movieID => {
    const response = await axios.get(`/${Params.movieID}${movieID}${Params.credits}?${apiKey}&language=en-US`)
    return response.data.cast
}

export {
    trendingMoviesFetch,
    searchMovieFetch,
    movieIDFetch,
    reviewFetch,
    creditsFetch
}