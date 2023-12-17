import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Register = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[phone, setPhone] = useState('');
    const[address, setAddress] = useState('');

    return (
        <>
            <Layout>
                <div className="reg-bg">
                    <form className="reg-form">
                        <h3>Register</h3>
                        <div className='input-fields'>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Full Name' aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Password' />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" id="exampleInputPassword1" value={phone} onChange={(e)=>setPhone(e.target.value)} required placeholder='Phone' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e)=>setAddress(e.target.value)} required placeholder='Address' />
                            </div>

                            <button type="submit" className="btn submit">Submit</button>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Register;
