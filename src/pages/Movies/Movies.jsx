import { useState } from "react";
import Loader from '../../components/Loader/Loader.jsx'
import EditorList from '../EditorList/EditorList.jsx'
import Form from '../../components/Form/Form.jsx'
import { searchMovieFetch } from "API/Api";

const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const [noMoviesText, setNoMoviesText] = useState(false)
    const searchMovies = queryMovie => {
        setLoading(true)
        searchMovieFetch(queryMovie).then(searchResults => {setSearchFilms(searchResults)
        setNoMoviesText(searchResults.length === 0)}).catch(error => {console.log(error)}).finally(() => {setLoading(false)})

    }

    return (
        <div>
            <Form searchMovies={searchMovies}/>
            {loading && <Loader/>}
            {noMoviesText && (<p>No results. Please, try again</p>)}
            {searchFilms && <EditorList films={searchFilms}/>}
        </div>
    )
}

export default Movies