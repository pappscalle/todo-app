import React from 'react';

const TodoItem = ( { item, handleChange} ) => {

    const {completed, test} = item;

    return(
        <div className="todoitem">
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => handleChange(item.id)}
            />
            <span>{test}</span> 
        </div>
    );
}

export default TodoItem;