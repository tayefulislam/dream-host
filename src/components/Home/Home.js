import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews()

    console.log(reviews)


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

                <h1 className='review-title'>Customer Reviews</h1>

                <div className='reviews'>
                    {
                        reviews.slice(3, 6).map(review => <Review key={review.id}
                            review={review}></Review>)
                    }
                </div>

            </div>




        </div>
    );
};

export default Home;