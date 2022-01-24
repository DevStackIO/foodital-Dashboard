import React from 'react'
import { Button } from './Button';
import './EditProfile.css';

function EditProfile() {
    return (
        <section className='pro-sec'>
            <h1 className='ptxt'>Edit Profile</h1>
            <form className='profile-form'>
                {/* 1st Input Row */}
                <ul className='input-row'>
                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>First Name</label>
                        <input type='text' placeholder='Faboye' />
                    </li>
                    {/* Each Input Wrap Ends */}

                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Tobi' />
                    </li>
                    {/* Each Input Wrap Ends */}
                </ul>
                {/* 1st Input Row Ends */}

                {/* 2nd Input Row */}
                <ul className='input-row'>
                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Email</label>
                        <input type='email' placeholder='Machio@gmail.com' />
                    </li>
                    {/* Each Input Wrap Ends */}

                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Phone Number</label>
                        <input type='number' placeholder='07035087479' />
                    </li>
                    {/* Each Input Wrap Ends */}
                </ul>
                {/* 2nd Input Row Ends */}

                {/* 3rd Input Row */}
                <ul className='input-row'>
                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Address</label>
                        <input type='text' placeholder='No 2, Mike thompson str' />
                    </li>
                    {/* Each Input Wrap Ends */}

                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>State</label>
                        <input type='text' placeholder='FCT' />
                    </li>
                    {/* Each Input Wrap Ends */}
                </ul>
                {/* 3rd Input Row Ends */}

                {/* 4th Input Row */}
                <ul className='input-row'>
                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Select Bank</label>
                        <input type='text' placeholder='select bank' />
                    </li>
                    {/* Each Input Wrap Ends */}

                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Account Name</label>
                        <input type='text' placeholder='Tobi Faboye' />
                    </li>
                    {/* Each Input Wrap Ends */}
                </ul>
                {/* 4th Input Row Ends */}

                {/* 5th Input Row */}
                <ul className='input-row'>
                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Account Number</label>
                        <input type='number' placeholder='3115781202' />
                    </li>
                    {/* Each Input Wrap Ends */}

                    {/* Each Input Wrap */}
                    <li className='fh'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Tobi' />
                    </li>
                    {/* Each Input Wrap Ends */}
                </ul>
                {/* 5th Input Row Ends */}

                <Button 
                    buttonSize={'btn--primary'}
                    buttonSize={'btn--large'} 
                    className='pf-btn'>
                        Save
                </Button>
            </form>

        </section>
    )
}

export default EditProfile;
