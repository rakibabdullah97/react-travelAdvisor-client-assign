import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Deal from '../Deal/Deal';
import { FaFire } from 'react-icons/fa';

const Deals = () => {
    const [deals, setDeals] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/deals')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, [])

    return (
        <>
            {
                (deals.length !== 0) ? <div className='container mb-5'>
                    <h1 className='text-center text-danger my-5 fw-bold'> Our On Going Hot Deals <FaFire /></h1>
                    <div className=' row row-cols-1 row-cols-md-3 g-4'>
                        {
                            deals.map(deal => <Deal
                                key={deal.id}
                                deal={deal}
                            ></Deal>)
                        }
                    </div>
                </div> : <div className='d-flex justify-content-center m-5 p-5'>
                    <Spinner animation='border' variant="danger" />
                </div>
            }
        </>

    );
};

export default Deals;