import { useState } from "react";
import PropTypes from 'prop-types'
import css from './Form.module.css'

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
        <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
        type="text"
        name="query"
        autoFocus
        value={query}
        placeholder="Search movies"
        onChange={handleInputChange} />

            <button className={css.button} type="submit">Search</button>
        </form>
    )
}

Form.propTypes = {
    searchMovies: PropTypes.func.isRequired
}

export default Form