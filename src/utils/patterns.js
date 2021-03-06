export const patterns = {
  year: /\d{4}/,
  ssn: /(\d){3}-(\d){2}-(\d){4}/,
  phone: /(\d){3}-(\d){3}-(\d){4}/,
  zip: /^\d{5}$|^\d{5}-\d{4}$/,
  email: /^([\s])*(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))([\s])*$/ // eslint-disable-line max-len,no-useless-escape
}
