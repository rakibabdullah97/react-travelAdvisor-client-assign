import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className=" footer bg-danger mt-3">
            <div className="container text-start py-3">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="col-md-4">
                            <h2 className='text-white'>Travel Advisor</h2>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="col-md-7">

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="about">About online Service</a></li>
                                    <li><a href="news">Read our News</a></li>
                                    <li><a href="map">Find Us On Google Map</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="help">Get Help</a></li>
                                    <li><a href="faq">Read FAQs</a></li>
                                    <li><a href="faq">Covid FAQ</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; Rakib Abdullah</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="p">Privacy policy</a>
                            <a href="t">Terms condition</a>
                            <a href="p">pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;