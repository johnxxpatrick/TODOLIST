import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      todo_empty: '',
      todos: [],
      id : 1 ,
      status : '',
      item_left : 0,
      input : '',
      completed: 0
    }

  handleChange(prop, e) {
    this.setState({ [prop]: e.target.value })
    this.removeTodo = this.removeTodo.bind(this)
    this.setState({input: e.target.value})
    }

  handleSave(e) {

    var obj = {
      status : false,
      id: this.state.id,
      todos : this.state.todo_empty,
      item_left : this.state.item_left,
      completed : this.state.completed
    }
    this.setState ({
      todos : this.state.todos.concat(obj),
      input : '',
      id : this.state.id + 1,
      item_left : this.state.item_left + 1
    })
  }

  removeTodo(item){
    this.setState({
      item_left: this.state.item_left - 1,
      completed: this.state.completed - 1
    })
    const newState = this.state.todos
    	if (newState.indexOf(item) > -1) {
      	newState.splice(newState.indexOf(item), 1)
        this.setState({todos: newState})
  }
}
  handleComplete(data){
    this.setState(prevState => {
    return {completed: data == 'add' ? prevState.completed - 1: prevState.completed + 1}
    })

    var newList = this.state.todos
    .map(item => {
     const isSelected = item.id  === data.id
     if(isSelected) item.status = !item.status

     return item

  })
}


  render() {

    console.log ('Todos:', this.state.todos)

    return (
          <div className="App">
              <header className="App-header">
              </header>
            <TodoForm
                  handleChange={this.handleChange.bind(this,'todo_empty')}
                  handleSave={this.handleSave.bind(this)}
                  removeitem_left={this.state.item_left}
                  removeTodo={this.removeTodo}
                  handleComplete={this.handleComplete.bind(this)}

                  {...this.state}
                />
         </div>
    );
  }
}

export default App;
