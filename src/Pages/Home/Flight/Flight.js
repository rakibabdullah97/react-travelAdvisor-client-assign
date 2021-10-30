import React from 'react';
import './Flight.css'
import { FaPaperPlane } from 'react-icons/fa'


const Flight = () => {
    return (
        <div className=' pb-5 flight-booking'>
        <h1 className='text-center fw-bold pt-2 text-dark'>Check Out The Cheapest Flight For You <FaPaperPlane /> </h1>
            <div class="wrapper bg-white container">
                <form action="#">
                    <div class="form-group d-sm-flex margin">
                        <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="From" class="form-control"/>
                            <div class ="label" id="from"></div> <span class ="fas fa-dot-circle text-muted"></span>
                        </div>
                        <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="To" class="form-control"/>
                            <div class ="label" id="to"></div> <span class ="fas fa-map-marker text-muted"></span>
                        </div>
                    </div>
                    <div class="form-group d-sm-flex margin">
                        <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative"> <input type="date" required placeholder="Depart Date" class="form-control"/>
                            <div class ="label" id="depart"></div>
                        </div>
                        <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="date" required placeholder="Return Date" class="form-control"/>
                            <div class ="label" id="return"></div>
                        </div>
                    </div>
                    <div class="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="Travellers Name" class="form-control"/>
                        <div class ="label" id="passenger"></div> <span class ="fas fa-users text-muted"></span>
                    </div>
                    <div class="form-group my-3">
                        <div class="btn btn-danger rounded-0 d-flex justify-content-center text-center p-3">Search Flights </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Flight;