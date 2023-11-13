import { useLocation, Link } from "react-router-dom";
import css from './EditorList.module.css'

const EditorList = ({films}) => {
    const location = useLocation()

    return(
   <ul className={css.list}>
    {films.map(film => (
        <li className={css.item} key={film.id}>
    <Link to={`/movies/${film.id}`} state={{form: location}}>{film.title ? film.title : film.name}</Link>
        </li>
    ))}
   </ul>
    ) 
}


  export default EditorList