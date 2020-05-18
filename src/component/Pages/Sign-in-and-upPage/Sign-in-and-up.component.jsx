import React from 'react';

import SignIn from '../../Sign-in/Sign-in.component';
import SignUp from '../../Sign-up/Sign-up.component';

const SignInAndUpPage = () => (
  <div style={{ display: 'flex'}}>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUpPage;