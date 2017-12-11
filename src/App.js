import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state =
    {
        todo_empty: '',
        todos: [],
        id : 1 ,
        status : '',
        item_left : 0,

    }

  handleChange(prop, e)
    {
      this.setState({ [prop]: e.target.value })
      this.removeTodo = this.removeTodo.bind(this)
      this.setState({input: e.target.value})
    }

  handleSave(e)
    {
      var obj =
      {
        status : false,
        id: this.state.id,
        todos : this.state.todo_empty,
        item_left : this.state.item_left,

      }
      this.setState
      ({
        todos : this.state.todos.concat(obj),
        input : '',
        id : this.state.id + 1,
        item_left : this.state.item_left + 1
      })

    }

  removeTodo(item)
    {
      this.setState({

      item_left:this.state.todos.length - 1
    })
        const newState = this.state.todos
      	if (newState.indexOf(item) > -1)
      {
    	  newState.splice(newState.indexOf(item), 1)
        this.setState({todos: newState})
      }
    }

  handleComplete(data)
  {
        var newList = this.state.todos
        .map(item =>
      {
        const isSelected = item.id  === data.id
        if(isSelected) item.status = !item.status
        return item
      })
        var totalCompleted = this.state.todos.reduce(function(complete, incomplete)
        {
        var addComplete = incomplete.status ? 1 : 0
        complete += addComplete
        return complete
        }, 0)
        this.setState({
        totalCompleted:this.state.totalCompleted,
        item_left:this.state.todos.length - totalCompleted,

        })

   }

  render() {

    var totalCompleted = this.state.todos.reduce(function(complete, incomplete)
    {
    var addComplete = incomplete.status ? 1 : 0
    complete += addComplete
    return complete
    }, 0)

    return (
          <div className="App">
              <header className="App-header">

              </header>
              <TodoForm
                  total={totalCompleted}
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
