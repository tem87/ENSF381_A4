import React, {useState, useEffect} from 'react';
import reviewsData from '../data/review';

const HomeMainSection = () => {
    //hold data of the review.js
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetching random reviews from reviews.js
        const randomReviews = () => {
          // Shuffle the review content
          const shuffledReviews = reviewsData.sort(() => 0.5 - Math.random());
          // Select two reviews
          setReviews(shuffledReviews.slice(0, 2));
        };
        randomReviews(); 
    }, []); 

    return (
        <section className="home-main">
          <div className="about">
            <h2>About Us</h2>
            <p>Company's vision and mission description goes here.</p>
            <button>Shop Now</button>
          </div>
          <div className="customer-reviews">
            <h2>Customer Reviews</h2>
            {/* Map over reviews array and display each review */}
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p>{review.customerName}</p>
                <p>{review.reviewContent}</p>
                {/* Display rating stars based on review's star rating */}
                <div className="rating">
                  {'★'.repeat(review.stars)}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
};

export default HomeMainSection;