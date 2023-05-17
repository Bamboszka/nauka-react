import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';

const ColumnForm = props => {
    const [title, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setValue(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;