import React, {useEffect, useState} from 'react'
import EditorList from 'pages/EditorList/EditorList.jsx'
import {trendingMoviesFetch} from '../../API/Api.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import css from './Home.module.css'

const Home = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const trendMoviesFetch = () => {
            setLoading(true)
            trendingMoviesFetch().then(trendingFilms => {setFilms(trendingFilms)}).catch(error => {console.log(error)}).finally(() => {setLoading(false)})
        }
        trendMoviesFetch()
    }, [])

    return(
        <div className={css.container}>
            <h1 className={css.title}>Trending today</h1>
           <EditorList films={films}/>
           {loading && <Loader/>}
        </div>
    )
}

export default Home