import React from 'react';
import './Blog.css'


const Blogs = () => {
    return (
        <div className="container ">
            <div className='row border pb-4 blog'>
                <h1 className='text-center my-5'>Latest Travel  <span className='text-info'>Tips and Advice</span> </h1>
                <div className='col-lg-5 col-12 '>
                    <img style={{ height: '100' }} className=' w-100 ' src='https://i.ibb.co/M1G2DQm/blog-1.jpg' alt=''/>
                </div>
                <div className='col-lg-7 col-12'>
                    <div>
                        <h2>When is the best time to book a cheap last-minute holiday?</h2>
                        <p>
                            Nabbing a last-minute holiday for a steal is akin to riding a rollercoaster: there’s the anticipation of the search, the thrill of chasing the cheapest deal, then that lighter-than-air happiness of locking it down.

                            It’s a nerve-wracking ride – you could land the holiday of your dreams for a bargain or be stuck paying overs for a break that was half the price just weeks earlier – but when it’s all over, the exhilaration is always worth it.

                            However, thanks to our latest data, it is possible take some of the guesswork out of booking a last-minute holiday. We crunched the numbers on holiday cost trends in 2018, looking at when prices dropped to their lowest and at what point they began creeping up again.
                            As a result, we can reveal when the best and cheapest time to book a last-minute holiday is.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;