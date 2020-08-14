import React, {Component} from 'react';
import './App.css';
import todosData from './todosData'
import TodoItem from './TodoItem';


class App extends React.Component {

  constructor() {

    super()
    this.state = {
      text: '',
      todos : todosData

    }

  }

  handleChange = (event) => {
     
    if (event.target !== undefined) {
      this.setState({
        text: event.target.value
      })

    } else {

      this.setState(prevState => {
        
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === event) {
            todo.completed = !todo.completed
          }
  
          return todo
        })
        return {
          todos: updatedTodos
        }
      })

    }
      
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.text.length === 0) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
       }
      
    this.setState({
      
      todos: this.state.todos.concat(newItem),
      text: ''
    })
  }

  render() {

    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
  
      <div className="todo-list">
          
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            name="task"
            value={this.state.text}
            onChange={this.handleChange} />
            <button>ToDo</button>
          </form>
          {todoItems}
          
      </div>

    )

  }

}

export default App;
