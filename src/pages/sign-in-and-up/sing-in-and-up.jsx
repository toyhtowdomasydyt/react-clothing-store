import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sing-in-and-up.scss';

const SingInAndUpPage = () => (
  <div className='sing-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
);

export default SingInAndUpPage;
