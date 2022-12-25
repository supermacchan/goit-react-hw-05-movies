import css from './ListItem.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';

export const ListItem = ({ name, id }) => {

    return (
        <li className={css.item}>
            <BiStar className={css.icon} />
            <Link
                to={`/movies/${id}`}
                className={css.link}
            >
                {name}
            </Link>
        </li>
    )
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}