import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Login</button>
        <Link to="/register">Create your account free</Link>
      </form>
    </>
  );
}
