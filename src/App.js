import React, { Component } from 'react';
import logo from './logo.svg';
import todoInput from './components/todoInput';
import './App.css';


class App extends Component {
  state = {
  empty_note: '',
  notes: [],
  details: {}
}
handleChange(prop,e){
  this.setState({ [prop]: e.target.value})
}

handleSave(e){
  var obj ={
    id: this.ste.details.id,
    note : this.state.note
  }
  this.setState({
    notes : this.state.notes.concat(obj),
    empty_note : '' })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <todoInput
          handleChange={this.handleChange.bind(this, 'empty_note')}
          handleSave={this.handleSave.bind(this)}
          {...this.state} />
        </div>
    );
  }
}

export default App;
