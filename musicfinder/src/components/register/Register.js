import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
const baseUrl = process.env.REACT_APP_FE_URL || "https://fantabulous-music-finder.herokuapp.com";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
        username: '',
        email: '',
        password: '',
        
    };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handleSubmit = e => {
      axios
        .post(`${baseUrl}/api/register`, this.state)
        .then(res => { 
          console.log(res);
          this.props.history.push(`/api/login`);
      })
      .catch(err => console.log(err),
      )
  }

  render(){
    return(
      <RegBar className ='login-box'>
          <form  className ='login-form' onSubmit={e => e.preventDefault()}>
              <input 
                  className ='input-form'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input 
                  className='input-form'
                  type="email"
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              
              <input
                  className='input-form'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput} 
              />  
              <button onClick={this.handleSubmit}> Register</button>  
          </form>
      </RegBar>
    );
  }
}  
export default Register;


const RegBar = styled.div`
    height: 150px;
    width: 600px;
    .input-form{
        margin: 5px;
        height: 25px;
        border: none;
        border-radius: 5px;
        text-align:center;
    }
    button{
      background: #EB5757;
      border-radius: 5px;
      color : white;
      
    }
    button:hover{
      background: black;
      cursor : pointer;
    }
`