import React, { Component } from 'react';
import request from 'superagent';

import '../App.css';



class TodoForm extends Component {


  render() {
      const { todos , item_left, completed  } = this.props
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
          <div className="item-left">{item_left} Items left</div>
          <div className="item-left">{completed} Items completed</div>
            {
              todolist.map((item, index) => {
                return <ul id="myUL">
                          <li key={index}>
                            <input type="checkbox" id="cbox3"
                              onClick={this.props.handleComplete.bind(this, item)} />
                                <label forHTML="cbox3">{item.todos}
                                </label>
                                <button className="btnRemove" onClick={this.props.removeTodo.bind(this, item)}>REMOVE
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
