import React from 'react';
import { connect } from 'react-redux';

import InputField from '../../component/Input-field/Input-field.component';
import CustomButton from '../../component/Button/Button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
  constructor() {
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  handleSignIn = async event => {
    const { emailSignInStart } = this.props
    const { email, password } = this.state;
    event.preventDefault();
    emailSignInStart(email, password);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { buttonStyle, googleSignInStart } = this.props;
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
              handleClick={this.handleSignIn}
            >SIGN IN
            </CustomButton>
            <CustomButton
              variant="outline-primary"
              handleClick={googleSignInStart}
            >
            GOOGLE SIGN IN
            </CustomButton>
          </div>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);