import React from 'react';

export default (props) => {
  let {name, text, type, input, meta: {touched, error}} = props;

  return (
    <div className="form-group">
      <input 
      {...input}
      name={name}
      type={type}
      placeholder={text}
      className="form-control"/>

      <div className="text-danger">
        {touched ? error : ''}
      </div>
    </div>

    )
}