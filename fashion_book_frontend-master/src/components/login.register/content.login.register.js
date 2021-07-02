import { Link } from 'react-router-dom'
import React, { useState } from 'react'
function ContentLoginRegister({ setEmailogin, setPasswordlogin, setEmail,
    setFirstname, setLastname, setAddress, setPhone, setPassword, setConfirm,
    notificationRegister, notificationLogin, registerSubmit, loginSubmit }){
        const [Login,setLogin] = useState(true);
        const [Register,setRegister] = useState(false);
        function handleLogin(){
            setLogin(true);
            setRegister(false);
           
        }
        function handleRegister(){
            setRegister(true)
            setLogin(false);
            
        }
        let xhtmlLogin ='';
        let xhtmlRegister='';
        if(Login){
            xhtmlLogin = <div className="login-form">
            <div className='login-content col-sm-6'>
            <h2>Login to your account</h2>
            <div className="noti">{notificationLogin}</div>
            <input type="email"
                placeholder="Email address"
                onChange={(e) => { setEmailogin(e.target.value) }}
            />
            <input type="password"
                placeholder="Password"
                onChange={(e) => { setPasswordlogin(e.target.value) }}
            />
                          
            <button
                className="btn btn-default"
                onClick={() => loginSubmit()}
            >Login</button>
            <div className='forgotpassword'>
                <Link to='/forgotpass/' >Quen Mat Khau?</Link>
            </div>
           
        </div>
        
        </div>
        }

        if(Register){
            xhtmlRegister =  <div className="signup-form">
                <div className = 'login-content col-sm-6'>

               
            <h2>New User Signup!</h2>
            <div className="noti">{notificationRegister}</div>

            <input type="email"
                placeholder="Email address"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <input type="text"
                placeholder="First name"
                onChange={(e) => { setFirstname(e.target.value) }}
            />
            <input type="text"
                placeholder="Last name"
                onChange={(e) => { setLastname(e.target.value) }}
            />
            <input type="text"
                placeholder="Address"
                onChange={(e) => { setAddress(e.target.value) }}
            />
            <input type="number"
                placeholder="Phone number"
                onChange={(e) => { setPhone(e.target.value) }}
            />
            <input type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="password"
                placeholder="Confirm"
                onChange={(e) => { setConfirm(e.target.value) }}
            />
            <button
                className="btn btn-default"
                onClick={() => registerSubmit()}
            >Signup
                </button>
        </div>
        </div>
        }
        return(
            <section className='homePage'>
                <div className="container login-register">
                <div className='menu-profile'>
                <ul>
                  <li><button onClick={handleLogin} className='menu-custom btn'>Đăng Nhập</button></li>
                  <li> <button onClick={handleRegister}  className='menu-custom btn '>Đăng Ký</button></li>
                </ul>
                <hr></hr>
              </div>
              <div>

                    {xhtmlRegister}
                     {xhtmlLogin}
              </div>
                     
                        
                       
                   
                      
                </div>
            </section>
        );
    }
export default ContentLoginRegister