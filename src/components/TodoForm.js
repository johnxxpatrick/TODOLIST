import React, { Component } from 'react';
import request from 'superagent';

import '../App.css';



class TodoForm extends Component {

  constructor(props) {
     super(props);
     this.state = {
       checkboxState: true
     }
   }
   onSubmit(event) {
     const checkedOrNot = [];
     event.preventDefault();
   }
   toggle(event) {
     this.setState({
       checkboxState: !this.state.checkboxState
     });
   }
   render() {
     const checkedOrNot = [];
     checkedOrNot.push(<p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>);
     const checkbox = (<span><input type="checkbox" onClick={this.toggle.bind(this)} />
     <label>Checkbox</label></span>);
      const { todos , removeCounter  } = this.props
      const todolist = todos
      console.log ('comments', todolist)

    return (
        <center>
        <h1>TODO LIST</h1>
          <div className="field">
              <input type="text" placeholder="What needs to be done ?"
               name="message" rows="3" cols="40" className="note"
               onChange={this.props.handleChange}
               value={this.props.input}/>
              <button type="button" className="save"
               onClick={this.props.handleSave} disabled={!this.props.input} >ADD
              </button>
          </div>
          <div className="item-left">{removeCounter} items left
          </div>
            {
              todolist.map((item, index) => {
                return <ul id="myUL">
                          <li key={index}>
                          <div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                      {checkbox}
                    </form>
                    {checkedOrNot}
                  </div>
                                <label forHTML="cbox3">{item.todos}
                                </label>
                                <button className="btnRemove" onClick={this.props.removeTodo}>REMOVE
                                </button>
                          </li>
                      </ul>
              })
            }
      </center>
    )
  }
}

export default TodoForm
