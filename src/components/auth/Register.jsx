import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {register} from '../../actions';
import {check} from '../../helpers/Validator'

import FormField from './FormField';


class Register extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      {name: 'name', text: 'Name', type: 'text'},
      {name: 'email', text: 'Email', type: 'text'},
      {name: 'password', text: 'Password', type: 'password'},
    ]

    this.renderFields = this.renderFields.bind(this);
  }


  renderFields() {
    return this.fields.map(field => {
      return <Field {...field} key={field.name} component={FormField} />
    })
  }



  renderError() {
    let {error} = this.props;

    return error && <div 
      style={{marginBottom: 10}}
      className="text-danger">{error}</div>
  }


  render() {
    let {handleSubmit, submitting} = this.props;

    return (
      <div className="container fullPage">
        <div className="row">
          <form 
          onSubmit={handleSubmit(register)}
          className="col-sm-6 mx-auto">
            <h5 className="display-4">Register</h5>

            {this.renderFields()}
            {this.renderError()}

            <button 
            type="submit" 
            className="btn btn-dark"
            disabled={submitting}>
            Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


function validate(values) {
  const errors = {}
  errors.name = check(values.name, ['required', 'max:50']);
  errors.email = check(values.email, ['required', 'isEmail']);
  errors.password = check(values.password, ['required', 'min:6']);
  return errors;
}


export default reduxForm({form: 'register', validate})(Register);