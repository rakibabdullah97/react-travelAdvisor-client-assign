import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaBook} from 'react-icons/fa'


const Booking = () => {
    const { dealId } = useParams()
    const [deal, setDeal] = useState({})
    const { user } = useAuth()
    const [booking, setBooking] = useState({})

    const handleDestination = e => {
        const bookDestination = { ...booking }
        bookDestination.destination = e.target.value
        setBooking(bookDestination)
    }
    const handleDate = e => {
        const bookingDate = { ...booking }
        bookingDate.date = e.target.value
        setBooking(bookingDate)
    }
    const handleBooking = e => {
        const newBooking = booking
        newBooking.name = user.displayName
        newBooking.email = user.email
        newBooking.status = "pending..."
        setBooking(newBooking)

        fetch('https://murmuring-shelf-42920.herokuapp.com/addbooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('booking Successful')
                }
            })
        e.preventDefault()
    }
// single deal search by id
    useEffect(() => {
        fetch(`https://murmuring-shelf-42920.herokuapp.com/deals/${dealId}`)
            .then(res => res.json())
            .then(data => setDeal(data))
    }, [])

    console.log(deal)
    return (
        <div className='container'>
            <div className='row g-5'>
                <h1 className='text-center text-danger pb-5 '>Book Your Trip Now <FaBook/></h1>
                <div className="col-md-4 " >
                    <div className="card ">
                        <img src={deal?.img} className="card-img-top" alt="..." />
                        <div className="card-body aline-item-center">
                            <h5 className="card-title">Name:{deal.name}</h5>
                            <p className="card-text">Info: {deal.info}</p>
                            <p className="card-text">Description: {deal.description}</p>
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
                                <Form.Label>Destination</Form.Label>
                                <Form.Control onChange={handleDestination} type="text" placeholder="Destination" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control placeholder="Email" type="email" value={user?.email || ''} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Pick A Date</Form.Label>
                            <Form.Control onChange={handleDate} placeholder="date" type="date" />
                        </Form.Group>
                        <button onClick={handleBooking} className="btn btn-success">Book My Trip</button>
                        <Link to='/mybooking'>
                            <button className='btn btn-primary m-2'>My Bookings</button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;