import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieAPI } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';


export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        setLoading(true);
        movieAPI
            .fetchCast(movieId)
            .then(result => setCast(result.cast))
            .catch(error => toast.error(`${error.message}`))
            .finally(() => { setLoading(false) });
    }, [movieId]);

    // console.log(cast); 

    return (
        <ul className={css.castList}>
            {cast && 
                cast.map(actor => {
                    return (
                        <li className={css.castMember} key={actor.cast_id}>
                            {actor.profile_path
                                ? <img
                                    src={`${BASE_IMG_URL}${actor.profile_path}`}
                                    alt=""
                                    width="180"
                                    className={css.photo} 
                                />
                                : <img
                                    src="https://dummyimage.com/500x750/ffffff/083004.jpg&text=No+Photo"
                                    alt=""
                                    width="180"
                                    className={css.photo}
                                />}
                            <div>
                                <p className={css.name}>{actor.name}</p>
                                <p className={css.character}>Character:</p>
                                <p className={css.characterName}>{actor.character}</p>
                            </div>
                        </li>
                    );
                })
            }
            {loading && <Loader />}
        </ul>
    );
}