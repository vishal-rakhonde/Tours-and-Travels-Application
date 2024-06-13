import React from 'react';

const Reviews = () => {
  // Sample data with 5 random comments and ratings between 4 and 5
  const reviews = [
    {
      id: 1,
      name: 'Yash Chimade',
      comment: 'Fantastic tour! Everything was perfect.',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Viraj Nagre',
      comment: 'Great experience, will definitely book again.',
      rating: 4,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Vivek Jadhav',
      comment: 'Wonderful trip, the guides were very friendly.',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Vishal Kamble',
      comment: 'Loved every moment of the tour.',
      rating: 4,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 5,
      name: 'Sophia Martinez',
      comment: 'A truly memorable experience, highly recommend!',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    }
  ];

  return (
    <div className="reviews-container">
      <style jsx>{`
        .reviews-container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .review-card {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }

        .review-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 20px;
        }

        .review-details {
          text-align: left;
        }

        .review-details h2 {
          margin: 0;
          font-size: 1.5em;
        }

        .review-details p {
          margin: 10px 0;
        }

        .star-rating {
          font-size: 1.2em;
          color: #f39c12;
        }
      `}</style>
      <h1>Customer Reviews</h1>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={`${review.name}'s review`} className="review-image" />
            <div className="review-details">
              <h2>{review.name}</h2>
              <p>{review.comment}</p>
              <div className="star-rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
