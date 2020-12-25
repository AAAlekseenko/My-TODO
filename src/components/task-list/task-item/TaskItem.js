import React, { useEffect, useState } from 'react';
import './TaskItem.scss'

function TaskItem(props) {
    const [title, setTitle] = useState(props.item.title);

    useEffect(() => {
        setTitle(props.item.title);
    }, [props.item.title])

    return (
        <div className='todo__item'>
            <input 
                type='text' 
                value={title}
                className='item__input'
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
            />
            
            <input 
                type='checkbox'  
                onChange={handleCheckItem}
                checked={props.item.checked}
                className='item__checkbox'
            />
            <button 
                onClick={handleDelItem}
                className='item__delete-button'    
            >
                Delete
            </button>
        </div>
    )

    function handleTitleBlur() {
        const item = {...props.item, title};

        props.handleChangeItem(item);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleCheckItem(event) {
        const checked = event.target.checked;
        const item = {...props.item, checked};

        props.handleChangeItem(item);

    }

    
    function handleDelItem() {
        props.handleDeleteItem(props.item.id);
    }
}



export default TaskItem;