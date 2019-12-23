import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' />
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' />
            </form>
        </div>
    );
};


export default Login;