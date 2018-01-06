import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


export default (ComposedComponent, rule) => {
  class Auth extends Component {
    componentWillMount() {
      let {user, history} = this.props;
      if(user === null) return null;
      if(!user && rule === 'requireAuth') history.push('/login');
      if(user && rule === 'isLoggedIn') history.push('/');
    }

    componentWillUpdate(nextProps) {
      let {user, history} = nextProps;
      if(user === null) return null;
      if(!user && rule === 'requireAuth') history.push('/login');
      if(user && rule === 'isLoggedIn') history.push('/');
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(({user}) => {
    return {user}
  })(withRouter(Auth));
}

