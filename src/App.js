import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData.js';

// const App = () => (
//     <div id="thelist">
//         <h1>Things to do</h1>
//          {todosData.map((item) => <TodoItem key={item.id} item={item}/>)}
//      </div>
// );

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        return(

            <div id="thelist">
                <h1>Things to do</h1>
                {this.state.todos.map((item) => <TodoItem key={item.id} item={item}/>)}
            </div>
        );
    }
}



// Challenge:
// Given an incomplete class-based component without constructor
// add a constructor and initialize state to fix the broken component
// class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             name:'Calle',
//             age:43
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )
//     }
// }



/*class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            answer: 'yes'
        };
    }

    yourMethod() {
        return "Hello World 3!";
    }

    render() {
        const date = new Date();
        return(
            <div>
                <div>
                    <h1>Is state important to know ? {this.state.answer}</h1>
                </div>
            </div>
        )        
    }
}
*/

/*
const App = () => (
    <div>
        <div>
            <h1>Hello World!</h1>
        </div>
    </div>
);

*/
export default App;