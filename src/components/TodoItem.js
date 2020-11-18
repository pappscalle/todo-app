import React from 'react';

const TodoItem = ( {item} ) => {

    const {completed, test} = item;

    return(
        <div className="todoitem">
            <input type="checkbox" checked={completed} />
            <span>{test}</span> 
        </div>
    );
}

export default TodoItem;