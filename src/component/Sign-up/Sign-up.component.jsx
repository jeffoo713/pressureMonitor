import React from 'react';
import { connect } from 'react-redux'

import InputField from '../../component/Input-field/Input-field.component';
import CustomButton from '../../component/Button/Button.component';

import { signUpStart } from '../../redux/user/user.action-creaters';

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

  handleSignUp = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { email, displayName, password, confirmPassword } = this.state;

    if ( password !== confirmPassword) {
      alert('please confirm the correct password');
      return;
    }
    
    signUpStart(email, password, displayName)
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
          height: '75vh',
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
      >
      <h4>No Account? Sign Up</h4>
        <div style={{width: '70%'}}>
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
            value={this.state.displayName}
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
          <div style={buttonStyle}>
            <CustomButton
              variant="primary"
              handleClick={this.handleSignUp}
            >SIGN UP</CustomButton>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);