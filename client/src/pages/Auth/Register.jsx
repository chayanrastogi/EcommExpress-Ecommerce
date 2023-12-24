import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register", { name, email, password, phone, address })
            if (res && res.data.success) {
                toast.success(res.data.message, {
                    style: {
                        backgroundColor: '#70b1e6',
                        color: '#fff',
                    }
                });
                setTimeout(() => {
                     navigate("/login");
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
            <Layout title="Register">
                <div className="reg-bg">
                    <form className="reg-form" onSubmit={handleFormSubmit}>
                        <h3>Register</h3>
                        <div className='input-fields'>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' required placeholder='Full Name' aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' required placeholder='Email' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password' />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" id="exampleInputPhone1" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete='off' required placeholder='Phone' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputAddress1" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete='off' required placeholder='Address' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputAnswer1" value={answer} onChange={(e) => setAddress(e.target.value)} autoComplete='off' required placeholder='Answer' />
                            </div>
                            <div className='btn-container'>
                                <button type="submit" className="btn submit">Register</button>
                            </div>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Register;
