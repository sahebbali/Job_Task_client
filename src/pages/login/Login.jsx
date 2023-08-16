import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import {BiSolidHide} from 'react-icons/bi'
import {BiShow} from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

const Login = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
      'https://job-task-server-2z5g.onrender.com/api/v1/auth/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log({response})

      if (response.status=== 200) {
         setEmail('');
        setPassword('');
       toast.success("Login successful")
        console.log('Login successful');
         navigate('/'); 
      } else {
        toast.error("Login Failed!")
        // Registration failed, handle accordingly
        console.log('Login failed');
      }
    } catch (error) {
      // Handle error
      console.log('Error registering:', error);
    }
};

  return (
    <>
      <Navbar />
      <div className='Login_Container'>
        <div className='Auth_container'>
          <div className='auth-form'>
            <div className='title'>
              <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='inputGroup'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='inputGroup'>
                <label>Password</label>
                <div className='password-input'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className='password-toggle' onClick={handleTogglePassword}>
                    {showPassword ? <BiSolidHide/> : <BiShow/>}
                  </span>
                </div>
              </div>
              <div className='inputGroup'>
                <button type='submit'>Submit</button>
              </div>
            </form>
            <div className='footer'>
              <p>
                Do not have an account? <a href='/signup'>Signup</a>
              </p>
            </div>
            <div className='socialmediaicon'>
              <div className='socialmediaicon-item'>
                <BsGoogle />
              </div>
              <div className='socialmediaicon-item'>
                <FaFacebookF />
              </div>
              <div className='socialmediaicon-item'>
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Login;
