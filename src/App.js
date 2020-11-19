import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData.js';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(id) {
        this.setState((prevState) => ({
            todos: prevState.todos.map(todo => ({
                ...todo,
                completed: todo.id === id ? !todo.completed : todo.completed,
            })),
        }));
    }

    render() {

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);

        return(
            <div id="thelist">
                <h1>Things to do</h1>
                {todoItems}
            </div>
        );
    }
}




export default App;