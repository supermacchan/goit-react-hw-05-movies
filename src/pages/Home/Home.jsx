import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { movieAPI } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
    const [trending, setTrending] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateTrendingList = () => {
        movieAPI
            .fetchTrending()
            .then(movies => setTrending(movies))
            .catch(error => toast.error(`${error.message}`))
            .finally(() => { setLoading(false) });
    };

    useEffect(() => {
        setLoading(true);
        generateTrendingList();
    }, []);


    return (
        <section className={css.trending}>
            <h2 className={css.trending__header}>Trending today</h2>
            <ul className={css.trending__list}>
                {trending && trending.map(movie => {
                    return <div key={movie.id}>{movie.title}</div>
                })}
                {loading && <Loader />}
                {/* тут будем мапать список айтемов */}
            </ul>
        </section>
    )
};