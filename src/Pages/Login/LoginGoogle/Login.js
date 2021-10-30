import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { FaLock } from 'react-icons/fa';

const Login = () => {
    const { signInUsingGoogle, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || './booking'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch((error) => setError(error.message));
    }
    return (
        <div className='container'>
            <h1 className='text-center text-danger mt-5'>Login By Google To Proceed <FaLock/></h1>
            <div className="row">
                <div className='col-md-6'>
                    <img className='img-fluid' src="https://i.ibb.co/TtPzY2y/login.jpg" alt="" />
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <button onClick={handleGoogleLogin} className="btn btn-success btn-lg m-2">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;