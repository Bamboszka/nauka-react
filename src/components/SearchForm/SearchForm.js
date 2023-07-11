import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const searchStringValue = useSelector(getSearchString);
    const [curentSearchString, setCurentSearchString] = useState(searchStringValue);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString({ curentSearchString }));
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