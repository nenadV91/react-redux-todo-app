import React, { Component } from 'react';
import {connect} from 'react-redux';

import TodoIndex from './todos/TodoIndex';

class Home extends Component {
  renderContent() {
    let {user} = this.props;

    if(user === null) return null;
    if(user === false) return (<div>No User</div>)

    return <TodoIndex />
  }

  render() {
    return (
      <div className="main-content">
        {this.renderContent()}
      </div>
    );
  }
}

export default connect(({user}) => {
  return {user}
})(Home);