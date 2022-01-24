import React, { useState } from 'react'
import './SignupForm.css';
import { Link } from 'react-router-dom';

const SignupForm  = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        rpassword: '',
    });

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className='login-component'>
            <div className='site-txt'>
                <img src='./asset/foodgital-icon.png' alt='Foodgital Brand Logo'/>
                <div className='txt-area'>
                    <h1>Win up to #10,000,000 <br/>referring your friends</h1>
                    <p>
                        Earn a living doing something you love
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Venenatis scelerisque at 
                        quam congue posuere libero in sit quam. Consequat, 
                        scelerisque non tincidunt sit lectus.
                    </p>
                </div>

                <img className='log-model' src='./asset/happylady.png' alt='Model' />
            
            </div>

            <div className='form-section'>
                <h1>Sign-Up</h1>
                <p>Create Account</p>
                <form method=''> 
                    <div className='irow'>
                        <label >Email address</label>
                        <input 
                            type='email' 
                            name='email' 
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className='irow'>
                        <label>Create Password</label>
                        <input 
                            type='password' 
                            name='password' 
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='irow'>
                        <label>Repeat Password</label>
                        <input 
                            type='password'
                            name='rpassword'
                            value={values.rpassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button onClick={handleFormSubmit}>Register Account</button>
                </form>

                <div className='login-op'>
                    <h3>Do you already have an account? </h3>
                    <span>
                        <Link to='/'>Log in</Link>
                    </span>
                </div>
            </div>
        </section>

    )
}

export default SignupForm;
