import React from 'react';

import InputField from '../../component/Input-field/Input-field.component';
import CustomButton from '../../component/Button/Button.component';

class SignUp extends React.Component {
  constructor() {
    super()
    this.state={
      email:'',
      displayName:'',
      password:'',
      confirmPassword:''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div 
        style={{ 
          width: '30vw',
          height: '75vh',
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
      }}
      >
      <h4>No Account? Sign Up</h4>

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
            name='displayName' 
            type='text' 
            value={this.state.displayNamed}
            handleChange={this.handleChange}
            placeholder='Display Name'
          />
          <InputField 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder='Password'
          />
          <InputField 
            name='confirmPassword' 
            type='password' 
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            placeholder='Confirm Password'
          />
          </div>
          <CustomButton
            variant="primary"
          >
          SIGN UP
          </CustomButton>
      </div>
    )
  }
}

export default SignUp;