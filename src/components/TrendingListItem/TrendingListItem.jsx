import css from './TrendingListItem.module.css';
import PropTypes from 'prop-types';

export const TrendingListItem = ({ name }) => {
    return (
        <li className={css.item}>{name}</li>
    )
};

TrendingListItem.propTypes = {
    name: PropTypes.string.isRequired,
}