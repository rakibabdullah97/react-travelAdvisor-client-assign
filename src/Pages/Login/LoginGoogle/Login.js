import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
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
            <h1>Please Login By Google To Proceed</h1>
            <div className="row">
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/TtPzY2y/login.jpg" alt="" />
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <button onClick={handleGoogleLogin} className="btn btn-success m-2">google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;