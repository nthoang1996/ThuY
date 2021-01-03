import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAmountDownAlt,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import './myCSS.css';
import ReactStars from 'react-rating-stars-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewHeader = props => {
  const { data } = props;

  const starConfig = {
    size: 30,
    //value: data.star,
    value: 4,
    edit: false,
    isHalf: true,
    activeColor: '#FFCE3E',
  };

  return (
    <div className='header-review'>
      <div className='header'>
        <span className='customer-name'>{data.authorName}</span>
        <span className='timestamp'>8 tiếng trước</span>
        <span style={{ display: 'none' }} className={(data.isEdit ? 'isEdit' : '')}>
          &nbsp;(đã chỉnh sửa)
        </span>
      </div>
      <div className='footer'>
        <ReactStars {...starConfig} />
        <div style={{ 'margin-left': '20px' }}>
          <span className='badges-item'>{data.serviceName}</span>
        </div>
        <div>
          <span className='badges-item'>Thú nuôi: {data.petType}</span>
        </div>
      </div>
    </div>
  );
};

const ReviewContent = props => {
  const { data } = props;

  return (
    <div className='review-content'>
      <div className='comment'>
        {data.content}
      </div>
      <div className='action'>
        <div className='action-item'>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{
              marginRight: '.4rem',
              color: 'var(--icon-color)',
              fontSize: '1.2rem',
            }}></FontAwesomeIcon>
          <span>{data.like}</span>
        </div>
        <div className='action-item'>
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{
              marginRight: '.4rem',
              color: 'var(--icon-color)',
              fontSize: '1.2rem',
            }}></FontAwesomeIcon>
          <span>{data.dislike}</span>
        </div>
      </div>
    </div>
  );
};

const Review = props => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const {data} = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='review'>
      <div className='avatar'>
        <img src='avatar.png' />
      </div>
      <div className='main'>
        <ReviewHeader data={data}/>
        <ReviewContent data={data}/>
        {/* <Slider {...settings}>
          <div>
            <img src='pet-Image.jpg' />
          </div>
          <div>
            <img src='pet-Image.jpg' />
          </div>
          <div>
            <img src='pet-Image.jpg' />
          </div>
          <div>
            <img src='pet-Image.jpg' />
          </div>
        </Slider> */}
      </div>
    </div>
  );
};

export default Review;
