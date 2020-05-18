import React from 'react';

import InputField from '../../component/Input-field/Input-field.component';
import CustomButton from '../../component/Button/Button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { buttonStyle } = this.props;
    return(
      <div 
        style={{ 
          width: '30vw',
          height: '60vh',
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <h4>Sign In</h4>

        <div
          style={{
            width: '70%'
          }}  
        >
          <InputField
           name='email'
           type='email' 
           handleChange={this.handleChange} 
           value={this.state.email}
           placeholder='Email'
          />
          <InputField 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder='Password'
          />
          </div>
          <div style={buttonStyle}
          >
            <CustomButton
              variant="primary"
            >SIGN IN
            </CustomButton>
            <CustomButton
              variant="outline-primary"
              handleClick={signInWithGoogle}
            >
            GOOGLE SIGN IN
            </CustomButton>
          </div>
        
      </div>
    )
  }
}

export default SignIn;