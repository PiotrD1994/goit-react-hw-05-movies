import { useLocation, Link } from "react-router-dom";

const EditorList = ({films}) => {
    const location = useLocation()

    return(
   <ul>
    {films.map(film => (
        <li key={film.id}>
    <Link to={`/movie/${film.id}`} state={{form: location}}>{film.title}</Link>
        </li>
    ))}
   </ul>
    ) 
}


  export default EditorList