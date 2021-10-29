import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Deal from '../Deal/Deal';

const Deals = () => {
    const [deals, setDeals] = useState([])
    const { isLoading } = useState([])


    useEffect(() => {
        fetch('deals.json')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, [])
    
    //spinner set here
    if (isLoading) {
        return <div className='d-flex justify-content-center m-5 p-5'>
            <Spinner animation='border' variant="danger" />
        </div>
    }
    return (
        <div className='container'>
            <h1 className='text-center  my-5'> Our On Going Hot Deals</h1>
            <div className=' row row-cols-1 row-cols-md-3 g-4'>
                {
                    deals.map(deal => <Deal
                        key={deal.id}
                        deal={deal}
                    ></Deal>)
                }
            </div>
        </div>
    );
};

export default Deals;