import React from 'react';
import { Table } from 'react-bootstrap';

const MyBooking = () => {
    return (
        <div className='container'>
            <h1>this is my booking</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event Title</th>
                        <th>Event Price</th>
                        <th>Event Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* {event?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.title}</td>
                            <td>{pd.info}</td>
                            <td>{pd.price}</td>
                            <button
                                onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2"
                            >
                                Delete
                            </button>
                        </tr>
                    </tbody>
                ))} */}
            </Table>
        </div>
    );
};

export default MyBooking;