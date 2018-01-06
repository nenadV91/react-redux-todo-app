import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodos, addTodo, updateTodo} from '../../actions';
import Masonry from 'react-masonry-component';

import Todo from './Todo';
import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';


class TodoIndex extends Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }


  componentWillMount() {
    this.props.getTodos();
  }


  openUpdateModal(todo) {
    this.modal.toggle(todo);
  }


  handleUpdate(update, id) {
    this.props.updateTodo(update, id);
  }


  renderTodos() {
    let {todos, showCompleted} = this.props;

    if(!showCompleted) {
      todos = todos.filter(todo => !todo.completed)
    }

    return todos.map(todo => {
      return <Todo 
      onUpdate={() => this.openUpdateModal(todo)} 
      key={todo._id} {...todo} />
    })
  }


  handleSubmit(value) {
    this.props.addTodo(value);
  }


  render() {
    return (
      <div>
        <Masonry className={'masonry'} >
          {this.renderTodos()}
        </Masonry>,
          
        <CreateModal onSubmit={this.handleSubmit}/>
        <UpdateModal 
        ref={node => this.modal = node}  
        onSubmit={this.handleUpdate} />

      </div>
    )
  }
}


export default connect(({todos, showCompleted}) => {
  return {todos, showCompleted}
}, {getTodos, addTodo, updateTodo})(TodoIndex);