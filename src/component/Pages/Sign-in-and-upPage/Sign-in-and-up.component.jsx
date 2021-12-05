import React from 'react';

import SignIn from '../../Sign-in/Sign-in.component';
import SignUp from '../../Sign-up/Sign-up.component';

const SignInAndUpPage = () => {
  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  };
  return (
    <div style={{ display: 'flex', marginTop: '60px' }}>
      <SignIn buttonStyle={buttonStyle} />
      <SignUp buttonStyle={buttonStyle} />
    </div>
  );
};

export default SignInAndUpPage;
