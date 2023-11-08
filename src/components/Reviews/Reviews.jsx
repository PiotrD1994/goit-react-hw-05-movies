import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { reviewFetch } from "API/Api";
import Loader from '../Loader/Loader.jsx'

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
        <div>
            {loading && <Loader/>}
            {reviews.length !== 0 && (
                <div>
                    <ul>
                        {reviews.map(review => (
                            <li key={review.id}>
                            <h2>Author: {review.author}</h2>
                            <p>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
                   {reviews.length === 0 && (
                    <p>We don't have any reviews for this movie</p>
            )}
        </div>
    )
} 

export default Reviews