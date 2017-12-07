import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      todo_empty: '',
      todos: [],
      id : 1 ,
      status :'',
      counter : 0,
      input : ''
    }

  handleChange(prop, e) {
    this.setState({ [prop]: e.target.value })
    this.removeTodo = this.removeTodo.bind(this)
    this.setState({input: e.target.value})
    }

  handleSave(e) {

    var obj = {
      status : 'active',
      id: this.state.id,
      todos : this.state.todo_empty,
      counter : this.state.counter,

    }
    this.setState ({
      todos : this.state.todos.concat(obj),
      input : '',
      id : this.state.id + 1,
      counter : this.state.counter + 1,
    })
  }

  removeTodo(name, i){
    this.setState({
      counter: this.state.counter - 1
    })
      let todos = this.state.todos.slice();
      todos.splice(i, 1);
      this.setState({
          todos
      });
  }

  handleComplete(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
          console.log ('counter', this.state.counter)
          console.log ('counter1', this.state)
          console.log ('todos', this.state.todos)

    return (
          <div className="App">
              <header className="App-header">
              </header>
            <TodoForm
                  handleChange={this.handleChange.bind(this,'todo_empty')}
                  handleSave={this.handleSave.bind(this)}
                  removeCounter={this.state.counter}
                  removeTodo={this.removeTodo}
                  handleComplete={this.handleComplete.bind(this)}
                  {...this.state}
                />
         </div>
    );
  }
}

export default App;
