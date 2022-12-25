import css from './ListItem.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';

const ListItem = ({ name, id }) => {
    const location = useLocation();

    return (
        <li className={css.item}>
            <BiStar className={css.icon} />
            <Link
                to={`/movies/${id}`}
                state={{from: location}}
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

export default ListItem;