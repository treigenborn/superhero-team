import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuth }) => {
  const [error, setError] = useState(false);

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(url, {
        email: values.email,
        password: values.password,
      });
      setError(false);
      if (res.data.token) {
        login(res.data.token);
        return <Redirect to='/home' />;
      }
    } catch (error) {
      setError(true);
    }
  };
  const url = 'http://challenge-react.alkemy.org/';

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  if (isAuth !== '') {
    return <Redirect to='/home' />;
  }
  return (
    <>
      <div className='login-container'>
        <h1>Log in</h1>
        <div className='form-login-container'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className='form-login'>
              {error && <p>Incorrect Email or Password </p>}
              <label className='form-label' htmlFor='email'>
                Email Address
              </label>
              <Field className='form-field' name='email' type='email' />
              <ErrorMessage name='email' />
              <label className='form-label' htmlFor='password'>
                Password
              </label>
              <Field className='form-field' name='password' type='password' />
              <ErrorMessage name='password' />
              <Button className='form-button' type='submit'>
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
