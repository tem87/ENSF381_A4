/*
=========================================================
Name        : HommeMainSection.js
Assignment  : 4
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 03/25/2024
Description : homepage main section implementation 
=========================================================
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
    // Hold data of the review.js
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetching random reviews from reviews.js
        const randomReviews = () => {
          // Shuffle the review content
          const shuffledReviews = reviewsData.sort(() => 0.5 - Math.random());
          // Select two reviews
          setReviews(shuffledReviews.slice(0, 2));
        };
        randomReviews(); 
    }, []); 

    return (
        <main>
          <section className="about-us">
            <h2>About Us</h2>
            <p>We are a small business that specializes in selling indoor plants and flowers! 
              We offer a variety of products that are perfect for any occasion. 
              Our goal is to provide our customers with the best quality products and customer service. 
              We are dedicated to making sure that our customers are satisfied with their purchase.
              We hope you enjoy your shopping experience with us!</p>
          </section>
    
          <section className="shop-now">
            <Link to="/products"><button className="shop-now-btn">Shop Now</button></Link>
          </section>
    
          <section className="customer-reviews">
            <h2>Customer Reviews</h2>
            <div className="review-container">
              {reviews.map((review, index) => (
                <div className="review" key={index}>
                  <p>
                    <span className="customer-name"><b>{review.customerName}</b></span><br />
                    {review.reviewContent}
                    <p className="rating">{'⭐'.repeat(review.stars)}</p>
                  </p>
                </div>
              ))}
            </div>            
          </section>
        </main>
      );
}

export default HomeMainSection;
