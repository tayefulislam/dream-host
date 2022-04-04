import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews()

    return (
        <div>

            <h1 className='review-title'>Customer Reviews</h1>

            <div className='reviews'>
                {
                    reviews.map(review => <Review key={review.id}
                        review={review}></Review>)
                }
            </div>



        </div>
    );
};

export default Reviews;