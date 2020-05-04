/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-named-as-default-member
import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import User from './User.jsx';
import './css/ProductReviews.scss';


const ProductReviews = (props) => {
  const server = 'http://localhost:1234';
  const [storeReviews, setStoreReviews] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [productReviewsAverage, setProductReviewsAverage] = useState(0);
  const [storeReviewsAverage, setStoreReviewsAverage] = useState(0);
  const [reviewType, setReviewType] = useState('productReviews');
  const [mainImage, setMainImage] = useState('');
  const [productName, setProductName] = useState('');

  const starGenerator = (rating) => {
    const starRating = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rating; i++) {
      starRating.push(<span className="etsy-icon wt-nudge-b-2 wt-icon--smaller" data-rating="1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>);
    }

    return starRating;
  };
  const getProductReviewsAverage = (productId) => {
    axios.get(`${server}/product/reviews/${productId}/average`)
      .then((res) => {
        setProductReviewsAverage(res.data[0]['AVG(star_rating)']);
      });
  };

  const getProductImage = (productId) => {
    // axios.get(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/mainImage/${productId}`)
    //   .then((res) => {
    setMainImage('https://picsum.photos/200/300');
    //});
  };

  const getProductInfo = (productId) => {
    axios.get(`http://ec2-18-144-174-63.us-west-1.compute.amazonaws.com:9000/products/${productId}`)
      .then((res) => {
        setProductName(res.data.productName);
      });
  };

  const getStoreReviewsAverage = (productId) => {
    axios.get(`${server}/store/reviews/${productId}/average`)
      .then((res) => {
        setStoreReviewsAverage(res.data[0]['AVG(star_rating)']);
      });
  };

  const getProductReviews = (productId) => {
    axios.get(`${server}/product/reviews/${productId}`)
      .then((res) => {
        const responseProductReviews = res.data;
        setReviews(responseProductReviews);
        setReviewType('productReviews');
        setProductReviews(responseProductReviews);
      });
  };

  const getStoreReviews = (storeId) => {
    axios.get(`${server}/store/reviews/${storeId}`)
      .then((res) => {
        const responseStoreReviews = res.data;
        setReviews(responseStoreReviews);
        setReviewType('storeReviews');
        setStoreReviews(responseStoreReviews);
      });
  };

  const handleClick = (e) => {
    if (e.target.id === 'product-reviews-button' && reviewType === 'storeReviews') {
      getProductReviews(props.productId);
    }
    if (e.target.id === 'store-reviews-button' && reviewType === 'productReviews') {
      getStoreReviews(props.storeId);
    }
  };


  useLayoutEffect(() => {
    getProductReviews(props.productId);
    getStoreReviews(props.storeId);
    getProductReviewsAverage(props.productId);
    getStoreReviewsAverage(props.storeId);
    getProductImage(props.productId);
    getProductInfo(props.productId);
  }, []);


  return (
    <div id="reviews" className="col-md-8">
      <div className="wt-display-flex">
        <div>
          <p className="wt-label">Shop Rating</p>
          <p className="stars"><span>{starGenerator(productReviewsAverage)}</span></p>
        </div>
        <div>
          <p className="wt-label">Total shop reviews</p>
          <p className="store-reviews-num">{storeReviews.length}</p>
        </div>
      </div>
      <div className={reviewType}>
        <div className="wt-tab">
          <div onClick={handleClick} id="product-reviews-button" className="wt-tab__item">
            Reviews for this item
            {' '}
            <span className="wt-badge">{productReviews.length}</span>
          </div>
          <div onClick={handleClick} id="store-reviews-button" className="wt-tab__item">
            Reviews for this shop
            {' '}
            <span className="wt-badge">{storeReviews.length}</span>
          </div>
        </div>
        <div className="reviews">
          {reviews.map((val) => (
            <div className={reviewType}>
              <div className="wt-display-flex-xs wt-align-items-center wt-mb-xs-1">
                <div><User userId={val.user_id} /></div>
                <div className="date"><Moment date={val.dt} format="MMM D, YYYY" /></div>
              </div>
              <div className="container" key={val.id}>
                <span className="star-container">{starGenerator(val.star_rating)}</span>
                <div className="text">{val.text}</div>
                <div className="main-image-container">
                  <p>Purchased Item:</p>
                  <img src={mainImage} />
                  <span className="wt-text wt-text-gray">{productName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wt-text-center see-more-reviews">
        <button className="wt-btn wt-btn--transparent">
          <span>See more reviews</span>
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;
