import css from './TrendingListItem.module.css';
import PropTypes from 'prop-types';
import { BiStar } from 'react-icons/bi'

export const TrendingListItem = ({ name }) => {
    return (
        <li className={css.item}>
            <BiStar className={css.icon} />
            <span>{name}</span>
        </li>
    )
};

TrendingListItem.propTypes = {
    name: PropTypes.string.isRequired,
}