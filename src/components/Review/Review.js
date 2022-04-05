import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { name, picture, ratings, review_detail } = review;


    return (
        <div className='review-card'>
            <div className='rating-head'>
                <img src={picture} alt="" />
                <div className='ratings'>
                    <h2>{name}</h2>
                    <h3>Ratings : {ratings}</h3>
                </div>
            </div>
            <p><i>"{review_detail}"</i></p>
        </div>
    );
};

export default Review;