import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaChartLine, FaCut } from 'react-icons/fa'


const ManageBooking = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('https://murmuring-shelf-42920.herokuapp.com/allbooking')
            .then((res) => res.json())
            .then((data) => setBooking(data))
    }, [])

    // delete function implemented 
    const handleDelete = (id) => {
        fetch(`https://murmuring-shelf-42920.herokuapp.com/deletebooking/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted')
                    const remaining = booking.filter(booking => booking._id !== id)
                    setBooking(remaining)
                }
            })

    }
    return (
        <div className='container'>
            <h1 className='text-center text-danger mt-5'>Manage All the Bookings Here <FaChartLine /> </h1>
            <div className="table-responsive">
                <Table className="mb-5">
                    <thead className="table-danger">
                        <tr>
                            <th>#</th>
                            <th>Deal Title</th>
                            <th>Destination</th>
                            <th>User Email</th>
                            <th>Book Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {booking?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.destination}</td>
                                <td>{pd.email}</td>
                                <td>{pd.email}</td>
                                <td><button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger text-white"
                                >
                                    Delete Booking
                                    <FaCut />
                                </button></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageBooking;