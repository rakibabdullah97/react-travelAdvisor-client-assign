import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FaChartLine, FaCut } from 'react-icons/fa'

const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([])
    const { user } = useAuth()

    //   console.log(myBooking)
    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [user.email])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure?')
        if (confirm) {
            fetch(`http://localhost:5000/deletebooking/${id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remaining = myBooking.filter(booking => booking._id !== id)
                        setMyBooking(remaining)
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h1 className='mt-5 text-center m-2 text-danger'>Manage Your Bookings Here <FaChartLine /> </h1>
            <div className="table-responsive">
                <Table className="mb-5">
                    <thead className="table-danger">
                        <tr>
                            <th>#</th>
                            <th>Deal Title</th>
                            <th>Destination</th>
                            <th>User Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {myBooking?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.destination}</td>
                                <td>{pd.email}</td>
                                <td>{pd.date}</td>
                                <td><button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger text-white "
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

export default MyBooking;