import React, { Component } from 'react';
class ToDo extends Component {
  render() {
    return (
      <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />

         <span>{ this.props.description }</span>
        <input type="button" value ='x'  onClick={this.props.deleteToDo} style ={this.props.style}/>
       </li>
    );
  }
}
export default ToDo;
