import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <label htmlFor='fnameInput'>First name</label>
                <input id='fnameInput' type='text' />
                <label htmlFor='lnameInput'>Last name</label>
                <input id='lnameInput' type='text' />
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' />
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' />
            </form>
        </div>
    );
};


export default Register;