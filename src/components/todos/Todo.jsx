import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {removeTodo, updateTodo} from '../../actions';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }


  renderDate() {
    let {completed, completedAt, createdAt} = this.props;
    let pre = completed ? 'Completed at: ' : 'Created at: ';
    let date = completed ? completedAt : createdAt;
    return pre + moment(date).format('MMM Do YYYY, h:mm:ss a');;
  }


  toggleCompleted() {
    let {completed, _id} = this.props;
    this.props.updateTodo({completed: !completed}, _id);
  }


  renderControls() {
    let {_id} = this.props;

    return (
      <ul>
        <li
        onClick={this.toggleCompleted}>
        <i className="fa fa-check" aria-hidden="true"></i></li>

        <li
        onClick={() => this.props.onUpdate()}>
        <i className="fa fa-pencil" aria-hidden="true"></i></li>

        <li
        onClick={() => this.props.removeTodo(_id)}>
        <i className="fa fa-trash-o" aria-hidden="true"></i></li>
      </ul>
    )
  }


  render() {
    let {completed} = this.props;

    return (
      <div className={"col-sm-4 todo " + (completed ? 'completed' : '')}>
        <div className="todo-content">
          <div className="date">{this.renderDate()}</div>
          <p>{this.props.body}</p>
          <div className="controls">{this.renderControls()}</div>
        </div>
      </div>
    )
  }
}

export default connect(null, {removeTodo, updateTodo})(Todo);