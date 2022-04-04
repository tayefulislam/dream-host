import React from 'react';
import './Home.css'

const Home = () => {


    return (
        <div>

            <div className="home-container">

                <div className="title-container">

                    <h1>Register Domain Name here!</h1>
                    <h2>Engage customers / users with the best domain..</h2>
                    <p>
                        Easy Setup With Instant Activation, DNS Management, No Hidden Cost</p>

                    <button className='buy-btn'>Buy Domain</button>


                </div>


                <div className="domain-container">
                    <img src="domain.jpg" alt="" />
                </div>


            </div>



            <div className="reviews-container">

            </div>




        </div>
    );
};

export default Home;