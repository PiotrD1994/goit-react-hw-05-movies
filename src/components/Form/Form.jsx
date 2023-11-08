import { useState } from "react";
import PropTypes from 'prop-types'

const Form =({searchMovies}) => {
    const [query, setQuery] = useState('')
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        searchMovies(query.toLowerCase()) 
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    )
}

Form.propTypes = {
    searchMovies: PropTypes.func.isRequired
}

export default Form