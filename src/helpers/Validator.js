 const methods = {
  isEmail(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address.' : undefined
  },


  min(value, n) {
    return value && value.length < n ? 
    `Must be at least ${n} characters long.` : undefined;
  },


  max(value, n) {
    return value && value.length > n ? 
    `Must be ${n} characters or less.` : undefined;
  },


  required(value) {
    return !value || !value.length ?
    'This field is required' : undefined;
  },
}


export function check(value, rules) {
  let errors = [];

  rules.forEach(e => {
    let params = e.split(':');
    let [rule, input] = params;

    if(params.length > 1) {
      let error = methods[rule](value, input);
      if(error) errors.push(methods[rule](value, input))
    } else {
      let error = methods[rule](value);
      if(error) errors.push(methods[rule](value))
    }
})


  return errors.length ? 
  errors[0] : undefined;
}

export default methods;