import React from 'react';
import banner1 from '../../../banner/116450437-travel-to-japan-time-to-travel-banner-with-airplane-and-hand-draw-doodles-on-the-background-vector-i.jpg'
import banner2 from '../../../banner/34925939-travel-banner-flat-vector-illustration-.jpg'
import banner3 from '../../../banner/depositphotos_197476176-stock-illustration-travel-world-web-banner-design.jpg'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "80vh" }} src={banner1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='text-danger'>Welcome To Travel Advisor</h1>
                            <p className='text-dark'>We Are All you need for A Vacation Plan</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "80vh" }} src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-dark'>Get The Best Vacation Deal </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "80vh" }} src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-dark'>Check Out On Going Package Deals</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;