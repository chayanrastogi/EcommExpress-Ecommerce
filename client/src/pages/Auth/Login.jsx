import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  return (
    <>
       <Layout>
                <div className="reg-bg">
                    <form className="login-form">
                        <h3>Login</h3>
                        <div className='input-fields'>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Password' />
                            </div>
                            <button type="submit" className="btn submit">Submit</button>
                        </div>
                        <p>Not a user? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </Layout>
    </>
  )
}

export default Login
