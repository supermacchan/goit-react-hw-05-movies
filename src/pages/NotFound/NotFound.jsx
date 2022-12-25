import css from './NotFound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
            <h2 className={css.title}>Oops! Page not found.</h2>
            <p className={css.description}>
                It looks like the page you are trying to access does not exist. <br />
                Please go back to the <Link to="/" className={css.link}>Main Page</Link> and try again.
            </p>
        </>
    )
}