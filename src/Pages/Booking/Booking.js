import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const { dealId } = useParams()
    const [deal, setDeal] = useState({})
    const { user } = useAuth()

    useEffect(() => {
        fetch('/deals.json')
            .then(res => res.json())
            .then(data => {
                const getDeal = data.find(d => (d.id) == +dealId)
                setDeal(getDeal)
            })
    }, [])
  

    return (
        <div className='container'>
            <div className='row g-5'>
                <h1>this is booking {dealId} </h1>
                <div className="col-md-4 " >
                    <div className="card ">
                        <img src={deal?.img} className="card-img-top" alt="..." />
                        <div className="card-body aline-item-center">
                            <h5 className="card-title">{deal.name}</h5>
                            <p className="card-text">{deal.description}</p>
                            <h5 className="card-title">Cost:${deal.price}</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <Form className='container'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label> Name</Form.Label>
                                <Form.Control type="Name" placeholder="First Name" value={user?.displayName || ''} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control placeholder="Email" type="email" value={user?.email || ''} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Pick A Date</Form.Label>
                            <Form.Control placeholder="date" type="date" />
                        </Form.Group>

                        <Link to='/'>
                            <a href="p" className="btn btn-success">Book Now</a>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;