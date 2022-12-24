import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieAPI } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';


export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        setLoading(true);
        movieAPI
            .fetchMovieDetails(movieId)
            .then(result => setMovie(result))
            .catch(error => toast.error(`${error.message}`))
            .finally(() => { setLoading(false) });
    }, [movieId])

    return (
        <>
            {movie && 
                <>
                    <button type="button" className={css.goBackBtn}>Go back</button>
                    <div className={css.basicInfo}>
                        <img
                            src={`${BASE_IMG_URL}${movie.poster_path}`}
                            alt={movie.title}
                            width='280'
                        />
                        <div>
                            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                            <p>User Score:</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h4>Genres</h4>
                            <p>{movie.genres.map(genre => { return `${genre.name} `})}</p>
                        </div>
                    </div>
                    <div className='additional-info'>
                        <h5>Additional Information</h5>
                        <ul>
                            <li>Cast</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                </>
            }
            {loading && <Loader />}
        </>     
    )
}