import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify/dist/components';
import { movieAPI } from 'services/movie-api';

export const Home = () => {
    return (
        <section className={css.trending}>
            <h2 className={css.trending__header}>Trending today</h2>
            <ul className={css.trending__list}>
                {/* тут будем мапать список айтемов */}
            </ul>
        </section>
    )
};