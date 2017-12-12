import React, { Component } from 'react';
import request from 'superagent';

import '../App.css';



class TodoForm extends Component {


  render() {
      const { todos , item_left, total,result  } = this.props
      const todolist = todos
      console.log('TODO:', todos)

    return (
        <center>
        <h1>TODO LIST</h1>
          <div className="field">
              <input type="text" placeholder="What needs to be done ?"
                  name="message" rows="3" cols="40" className="note"
                  onChange={this.props.handleChange}
                  value={this.props.input}/>
              <button type="button" className="save"
                  onClick={this.props.handleSave} disabled={!this.props.input}>ADD
              </button>
          </div>
          <table className="item-left">
          <tr>
          <th>{total.incomplete} Items Left</th>
          <th>{total.completed} Items Completed</th>
          </tr>
          </table>
            {
              todolist.map((item, index) => {
                return <ul id="myUL">
                          <li key={index}>
                            <input type="checkbox" checked={item.status}
                                onClick={this.props.handleComplete.bind(this, item)} />
                            <label style={{ textDecoration: item.status ? 'line-through' : 'none',
                             color: item.status ? 'red' : 'black'}}>{item.todos}
                            </label>
                            <button className="btnRemove"
                                onClick={this.props.removeTodo.bind(this, item)}>REMOVE
                            </button>
                          </li>
                      </ul>
              })
            }
            <table className="filter">
            <tr>
            <th></th>
            <th></th>
            <th><div className="btn-group">
                  <button onClick={this.props.filterAll}>ALL</button>
                  <button onClick={this.props.filterActive}>ACTIVE</button>
                  <button onClick={this.props.filterComplete}>COMPLETED</button>
                </div>
            </th>
            </tr>
            </table>
      </center>
    )
  }
}

export default TodoForm
