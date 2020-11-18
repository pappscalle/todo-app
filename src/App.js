import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData.js';

const App = () => (
    <div id="thelist">
        <h1>Things to do</h1>
        {todosData.map((item) => <TodoItem key={item.id} item={item}/>)}
    </div>
);


export default App;