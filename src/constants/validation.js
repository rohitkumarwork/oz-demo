// Regex to validate email
export function validateEmail(text) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let email = text.trim();
  if (email === '' || email === undefined || email === null) {
    return { status: false, error: 'Please enter email' };
  } else if (!emailRegex.test(email)) {
    return { status: false, error: 'Please enter valid email' };
  } else {
    return { status: true, error: '' };
  }
}

// Regex to validate password
export function validatePassword(text) {
  var passwordRegex = /(?=.{8,})(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*/;
  let password = text.trim();

  if (password === '' || password === undefined || password === null) {
    return { status: false, error: 'Please enter password' };
  } else if (password.length < 8) {
    return { status: false, error: 'Please enter atleast 8 character' };
  } else if (!passwordRegex.test(password)) {
    return {
      error:
        'Password should be alphanumeric with atleast one special character.(abc@1234)',
      status: false,
    };
  } else {
    return { status: true, error: '' };
  }
}
// Regex to validate name
export function validateUserName(text) {
  var usernameRegex = /^[a-zA-Z0-9\.\d\-\_]{2,30}$/;
  let username = text;
  if (username === '' || username === undefined || username === null) {
    return {
      error:
        "Can't be blank. Please, use latin letters, digits, underscore, dash or dot",
        status: false,
    };
  } else if (username.length > 30) {
    return {
      error:
        "Can't be longer than 30 symbols. Please, use latin letters, digits, underscore, dash or dot",
        status: false,
    };
  } else if (!usernameRegex.test(username)) {
    return {
      error: 'Please, use latin letters, digits, underscore, dash or dot',
      status: false,
    };
  } else {
    return { error: '', status: true };
  }
}
