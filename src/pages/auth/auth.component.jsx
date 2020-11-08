import React from 'react';
import './auth.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Auth = () => (
  <section className="auth">
    <SignIn />

    <SignUp />
  </section>
);

export default Auth;
