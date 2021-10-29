import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';



const AddDeal = () => {
    const [deal, setDeal] = useState({})

    const handleTitle = e => {
        const newDeal = { ...deal }
        newDeal.name = e.target.value;
        setDeal(newDeal)
    }
    const handleDate = e => {
        const newDeal = { ...deal }
        newDeal.price = e.target.value;
        setDeal(newDeal)
    }
    const handleDescription = e => {
        const newDeal = { ...deal }
        newDeal.description = e.target.value;
        setDeal(newDeal)
    }
    const handleImage = e => {
        const newDeal = { ...deal }
        newDeal.img = e.target.value;
        setDeal(newDeal)
    }
    return (
        <div className='container'>
            <h1>here you can add new deals</h1>
            <div className="col-md-9 d-flex justify-content-center align-item-center m-5">
                <div className="text-start shadow p-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Deal Title</Form.Label>
                        <Form.Control onChange={handleTitle} type="text" placeholder="Deal Title" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Deal Price</Form.Label>
                        <Form.Control onChange={handleDate} type="number" placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Deal Description</Form.Label>
                        <Form.Control onChange={handleDescription} type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Deal Info</Form.Label>
                        <Form.Control onChange={handleDescription} type="text" placeholder="Deal Info" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Event Image</Form.Label>
                        <Form.Control onChange={handleImage} type="text" placeholder="Image URL" />
                    </Form.Group>
                    {/* <Button onClick={addEvent}>Add Event</Button> */}
                </div>
            </div>
        </div>
    );
};

export default AddDeal;