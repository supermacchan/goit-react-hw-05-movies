import css from './Movies.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
// import { toast } from 'react-toastify';


export const Movies = () => {
    const location = useLocation();
    // console.log(location);
    const [value, setValue] = useState('');

    const handleInputChange = event => {
        const inputValue = event.currentTarget.value.toLowerCase();
        setValue(inputValue);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (value.trim() === '') {
            // toast.error('Enter search query.');
            reset();
            return;
        }
        // onSubmit(value);
        reset();
    };

    const reset = () => {
        setValue('');
    };

    return (
        <>
            {location.pathname === '/movies' &&
                <form className={css.searchForm} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Enter movie name"
                        className={css.input}
                        onChange={handleInputChange}
                    />
                <button type="submit" className={css.button}>
                    <BsSearch className={css.buttonIcon} />
                    Search
                </button>
            </form>
            }
            <Outlet />
        </>
    );
}