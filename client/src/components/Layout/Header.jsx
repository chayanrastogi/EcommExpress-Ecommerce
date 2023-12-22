import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AiTwotoneShop } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

const Header = () => {

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logout Successfully', {
      style: {
          backgroundColor: '#70b1e6',
          color: '#fff',
      }
  });
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
    setTimeout(() => {
      navigate("/login");
  }, 10);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><AiTwotoneShop />  Ecomm Express</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/category' className="nav-link" aria-current="page">Category</NavLink>
              </li>
              {!auth.user ? (<>
                <li className="nav-item">
                  <NavLink to='/register' className="nav-link" aria-current="page">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/login' className="nav-link" aria-current="page">Login</NavLink>
                </li>
              </>) : (<li className="nav-item">
                <NavLink className="nav-link logout" aria-current="page" onClick={handleLogout}>Logout</NavLink>
              </li>)}
              <li className="nav-item">
                <NavLink to='/cart' className="nav-link cart" aria-current="page"><FaShoppingCart /> (0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
