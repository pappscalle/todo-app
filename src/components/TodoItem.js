import React from 'react';

const TodoItem = ( { item, handleChange} ) => {

    const {completed, test} = item;

    return(
        <label className="todoitem">
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => handleChange(item.id)}
            />
            <span>{test}</span> 
        </label>
    );
}

export default TodoItem;