import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieAPI } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';


export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieAPI
            .fetchReviews(movieId)
            .then(result => {
                if (result.results.length > 0) {
                    setReviews(result.results);
                }
                setEmpty(true);
            })
            .catch(error => toast.error(`${error.message}`))
            .finally(() => { setLoading(false) });
    }, [movieId]);

    // console.log(reviews); 

    return (
        <ul className={css.reviewsList}>
            {loading && <Loader />}

            {reviews &&
                reviews.map(review => {
                    return (
                        <li className={css.review} key={review.id}>
                            <h3 className={css.author}> Author: {review.author}</h3>
                            <p className={css.content}>{review.content}</p>
                        </li>
                    );
                })
            }
            
            {empty &&
                <p className={css.empty}>We don't have any reviews for this movie.</p>
            }
        </ul>
    );
}