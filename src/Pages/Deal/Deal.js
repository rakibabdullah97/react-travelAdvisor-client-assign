import React from 'react';
import { Link } from 'react-router-dom';
import './Deal.css'

const Deal = ({ deal }) => {
    const { name, img, info, _id,} = deal
    return (
        <div>
            <div className="card deal-card">
                <img style={{ height: 250 }} src={img} className="card-img-top img-fluid img-responsive" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{info}</p>
                    {/* <h5 className='text-danger'> $ {price}</h5> */}

                    <Link to={`./booking/${_id}`}>
                        <button type="button" className="book-btn btn btn-danger">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Deal;