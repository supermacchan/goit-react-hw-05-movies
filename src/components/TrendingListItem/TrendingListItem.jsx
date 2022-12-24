import css from './TrendingListItem.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';
// import { toast } from 'react-toastify';
// import { movieAPI } from 'services/movie-api';

export const TrendingListItem = ({ name, id }) => {
    // const handleLinkClick = (id) => {
    //         movieAPI
    //             .fetchMovieDetails(id)
    //         .then(movie => console.log(movie))
    //         .catch(error => toast.error(`${error.message}`))
    // }

    return (
        <li className={css.item}>
            <BiStar className={css.icon} />
            <Link to={`/movies/${id}`}>{name}</Link>
            <span>{name}</span>
        </li>
    )
};

TrendingListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}