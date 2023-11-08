import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { creditsFetch } from "API/Api";
import Loader from '../Loader/Loader.jsx'

const Cast = () => {
const {movieId} = useParams()
const [actors, setActors] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    const castOfMovie = () => {
        setLoading(true)
        creditsFetch(movieId).then(actors => {setActors(actors)}).catch(error => {console.log(error)}).finally(() => {setLoading(false)})
    }
    castOfMovie()
}, [movieId])

return (
    <div>
        {loading && <Loader/>}
        <ul>
            {actors.map(({id, profile_path, original_name, name, character}) => (
                <li key={id}>
                <img width = "200px"
                src={
                    profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg` 
                }
                alt={original_name}/>
                <p>{name}</p>
                <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Cast