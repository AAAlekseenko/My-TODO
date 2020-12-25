import React, { useEffect, useState, useCallback } from 'react';
import './TaskItem.scss'

function TaskItem(props) {
    const [title, setTitle] = useState(props.item.title);

    useEffect(() => {
        setTitle(props.item.title);
    }, [props.item.title])
    
    let itemInput = 'item__input';
    if (props.item.checked) {
        itemInput += ' item__input-active';
    }
    
    const handleTitleChange = useCallback(
        (event) => {
            setTitle(event.target.value);
        },
        [setTitle],
      );

    return (
        <div className='todo__item'>
             <input 
                type='checkbox'  
                onChange={handleCheckItem}
                checked={props.item.checked}
                className='item__checkbox'
            />
            <input 
                type='text' 
                value={title}
                className={itemInput}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
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
        if (!title.length) {
            return handleDelItem();
        }
        const item = {...props.item, title};
        props.handleChangeItem(item);

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