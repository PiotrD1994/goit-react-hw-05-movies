import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { reviewFetch } from "API/Api";
import Loader from '../Loader/Loader.jsx'
import css from './Reviews.module.css'

const Reviews = () => {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchReviewsMovies = () => {
            setLoading(true)
            reviewFetch(movieId).then(reviews => {setReviews(reviews)}).catch(error => {console.log(error)}).finally(() => {setLoading(false)})
        }
        fetchReviewsMovies()
    }, [movieId])
    return (
        <div className={css.container}>
            {loading && <Loader/>}
            {reviews.length !== 0 && (
                <div className={css.container}>
                    <ul className={css.list}>
                        {reviews.map(review => (
                            <li className={css.item} key={review.id}>
                            <h2 className={css.header}>Author: {review.author}</h2>
                            <p className={css.text}>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
                   {reviews.length === 0 && (
                    <p className={css.text}>We don't have any reviews for this movie</p>
            )}
        </div>
    )
} 

export default Reviews