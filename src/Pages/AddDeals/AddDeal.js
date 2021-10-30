import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const AddDeal = () => {
    const [deal, setDeal] = useState({})

    const handleName = e => {
        const newDeal = { ...deal }
        newDeal.name = e.target.value;
        setDeal(newDeal)
    }
    const handlePrice = e => {
        const newDeal = { ...deal }
        newDeal.price = e.target.value
        setDeal(newDeal)
    }
    const handleImage = e => {
        const newDeal = { ...deal }
        newDeal.img = e.target.value
        setDeal(newDeal)
    }
    const handleDescription = e => {
        const newDeal = { ...deal }
        newDeal.description = e.target.value;
        setDeal(newDeal)
    }
    const handleInfo = e => {
        const newDeal = { ...deal }
        newDeal.info = e.target.value;
        setDeal(newDeal)
    }

    const handleAddDeal = () => {
        console.log(deal)
        fetch('http://localhost:5000/deals', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(deal)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Created New Deal')
                    setDeal({})
                }
            })
    }

    return (
        <div className='container '>
            <h1 className='text-center text-danger mt-5'>Add New Deals</h1>
            <div className="m-5">
                <div>
                    <div className="text-start shadow p-5" >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Deal Title</Form.Label>
                            <Form.Control onChange={handleName} type="text" placeholder="Deal Title" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Price</Form.Label>
                            <Form.Control onChange={handlePrice} type="number" placeholder="Price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Description</Form.Label>
                            <Form.Control onChange={handleDescription} type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Info</Form.Label>
                            <Form.Control onChange={handleInfo} type="text" placeholder="Deal Info" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Image</Form.Label>
                            <Form.Control onChange={handleImage} type="text" placeholder="Image URL" />
                        </Form.Group>
                        <button onClick={handleAddDeal} className='btn btn btn-danger'>Add Deal</button>
                        <Link to='/home'>
                        <button  className='btn btn btn-primary m-2'>Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDeal;