import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Layout title="Login">
                <div className="reg-bg">
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <h3>Login</h3>
                        <div className='input-fields'>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' required placeholder='Email' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' required placeholder='Password' />
                            </div>
                            <div className='btn-container'>
                                <button type="submit" className="btn submit">Login</button>
                            </div>
                        </div>
                        <p>Not a user? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login
