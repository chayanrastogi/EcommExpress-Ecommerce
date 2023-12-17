import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <h4 className='text-center'>
                    All Rights Reserved &copy;<Link to='https://chayanrastogi.github.io/Personal-Portfolio/' target='blank'> Chayan Rastogi</Link>
                </h4>
                <p className="text-center">
                    <Link to='/about'>About</Link>
                    |
                    <Link to='/contact'>Contact</Link>
                </p>
            </div>
        </>
    )
}

export default Footer
