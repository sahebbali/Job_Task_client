import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './singup.css';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import {BiSolidHide} from 'react-icons/bi'
import {BiShow} from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

   const handleNameChange = (event) => {
    setName(event.target.value);
  };
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
      'https://job-task-server-2z5g.onrender.com/api/v1/auth/register',
      {
        name,
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
          setName('');
         setEmail('');
        setPassword('');
        toast.success("Registration successful")
        console.log('Registration successful');
        navigate('/login')
      } else {
        toast.error("Registration failed")
        // Registration failed, handle accordingly
        console.log('Registration failed');
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
              <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
            
              <div className='inputGroup'>
                <label>Name</label>
                <input
                  type='name'
                  name='name'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
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
                Already have an account? <a href='/login'>Login</a>
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

export default Signup;
