import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const location = useLocation();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password })
            if (res && res.data.success) {
                toast.success(res.data.message, {
                    style: {
                        backgroundColor: '#70b1e6',
                        color: '#fff',
                    }
                });
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                setTimeout(() => {
                    navigate(location.state || "/");
                }, 10);
            } else {
                toast.error(res.data.message, {
                    style: {
                        backgroundColor: '#70b1e6',
                        color: '#fff',
                    }
                });
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
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
                            <div className="mb-3 password">
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password' />
                            </div>
                            <div className='btn-container'>
                                <button type="submit" className="btn submit">Login</button>
                            </div>
                        </div>
                        <p><Link to="/register">Register</Link> | <Link to="/forgotpass">Forgot Password?</Link></p>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login
