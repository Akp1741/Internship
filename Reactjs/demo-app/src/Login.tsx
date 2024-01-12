
import React from 'react';

interface FormInputValues {
  email: string;
  password: string;
}

function getFormValues() {
  const storedValues = localStorage.getItem('form');
  if (!storedValues)
    return {
      email: 'ayush@gmail.com',
      password: 'ayush123',
    };
  return JSON.parse(storedValues);
}

const Login=()=> {
  const [values, setValues] = React.useState<FormInputValues>(getFormValues);
  const [isValid, setIsValid] = React.useState<boolean>(true);

  React.useEffect(() => {
    localStorage.setItem('form', JSON.stringify(values));
  }, [values]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.email.trim() === '' || values.password.trim() === '') {
      setIsValid(false);
      alert('Error: Both email and password are required.');
      return;
    }

    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      alert('You are logged in!');
      window.location.href = '/Homepage';
    } else {
      alert('Error: Invalid email or password.');
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
    setIsValid(true);
  }

  return (
    <div>
      <header>
        <h1>Login Page</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
            <input
              placeholder="e.g. user.email@domain.com"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              placeholder=""
              onChange={handleChange}
              value={values.password}
            />
          </label>
        </div>
        {!isValid && <>invalid input</>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
