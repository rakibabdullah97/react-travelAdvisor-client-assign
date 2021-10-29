import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    //spinner set here
    if (isLoading) {
        return <div className='d-flex justify-content-center m-5 p-5'>
            <Spinner animation='border' variant="danger" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect

                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }

        ></Route>
    );
};

export default PrivateRoute;