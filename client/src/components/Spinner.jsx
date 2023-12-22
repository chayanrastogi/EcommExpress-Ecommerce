import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Spinner = () => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate(); 

    useEffect(() => {
        const inetrval = setInterval(() => {
            setCount((prevVal)=> --prevVal)
        }, 1000);
        count === 0 && navigate('/login')
        return () => clearInterval(inetrval); 
    },[count, navigate]);

    return (
        <>
            <div className="d-flex flex-column gap-5 justify-content-center align-items-center" style={{height: "100vh"}}>
                <h1>Redirecting you in {count}s</h1>
                <div className="spinner-border text-primary" role="status" style={{height: "80px", width:"80px", fontSize:"50px"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
