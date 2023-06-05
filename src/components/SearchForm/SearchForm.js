import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const [curentSearchString, setCurentSearchString] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: curentSearchString });
        setCurentSearchString('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." type="text"
                value={curentSearchString} onChange={(e => setCurentSearchString(e.target.value))} />
            <Button>Search</Button>
        </form>
    );
};

export default SearchForm;