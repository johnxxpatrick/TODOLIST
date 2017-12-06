import React, { Component } from 'react';
import request from 'superagent'
import '../App.css'

class todoInput extends Component {

  render() {
    const { details, notes} = this.props
    const noteList = notes
    .filter((noteList) =>{
    return details.id == noteList.id
  })
    console.log(noteList)
    return (
      <div className="App">
        <header className="App-header">
        <div className="field">
                  <input type="text" placeholder="What needs to be done ?"
                   onChange={this.props.handleChange} value={this.props.empty_note} />
                  <button onClick={this.state.handleSave}>ADD
                  </button>
        </div>
        <textarea placeholder="Enter something here." id="text" name="text" rows="4" >
        {
          noteList.map((item, index)=>
          return <h4 key={index}>{item.notes}</h4>
        )}
        </textarea>
        </header>
      </div>
    );
  }
}

export default todoInput;
