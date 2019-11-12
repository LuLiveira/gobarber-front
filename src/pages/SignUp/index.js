import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Your full name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Create account</button>
        <Link to="/">I have login</Link>
      </form>
    </>
  );
}
