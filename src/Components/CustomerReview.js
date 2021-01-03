import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import './myCSS.css';
import axios from 'axios';
import { jsonServerHost, baseHost } from '../data_static';
import ReactStars from "react-rating-stars-component";

function HeaderReviewItem(props) {
    const {data} = props;

    const starConfig = {
      size: 30,
      value: data.star,
      edit: false,
      isHalf: true,
      activeColor: "#FFCE3E"
    };

    return (
        <div className='header-item'>
            <span className='customer-name'>{data.authorName}</span>
            <div className='rating'>
              <ReactStars {...starConfig} />
            </div>
            <div className='group-badges'>
                <span className='badges-item'>{data.serviceName}</span>
                <span className='badges-item'>Thú nuôi: {data.petType}</span>
            </div>
        </div>
    );
}

function ReviewItem(props) {
    const {data} = props;


    return (
        <div className='review-item'>
            <HeaderReviewItem data={data} />
            <span className='comment'>
              {data.content}
            </span>
        </div>
    );
}

function CustomerReview(props) {
  const data = [
		{
      id: 1,
      star: 4,
      authorName: "Nguyễn Văn A",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      petType: "Chó",
      serviceName: "Khám sức khỏe định kỳ",
      like: 12,
      dislike: 5,
      isEdit: true
    },
    {
      id: 2,
      star: 5,
      authorName: "Nguyễn Văn B",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      petType: "Mèo",
      serviceName: "Khám sức khỏe định kỳ",
      like: 12,
      dislike: 5,
      isEdit: false
    },
    {
      id: 3,
      star: 3,
      authorName: "Nguyễn Văn C",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      petType: "Mèo",
      serviceName: "Tiêm phòng",
      like: 12,
      dislike: 5,
      isEdit: false
    },
    {
      id: 4,
      star: 3,
      authorName: "Nguyễn Văn D",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      petType: "Chó",
      serviceName: "Tiêm phòng",
      like: 12,
      dislike: 5,
      isEdit: true
    }
  ];
  
  const [reviewlist, setReviewList] = useState(data);

  function calcTotalPoint(reviews) {
    return reviews.reduce((total, review2) => {
      return  total + review2.star
    }, 0);
  }

  const totalPoint = calcTotalPoint(reviewlist);
  const reviewPoint = +(totalPoint / reviewlist.length).toFixed(1);

  return (
      <div className='customer-review'>
          <h2 className='section-title'>
              <span>ĐÁNH GIÁ CỦA KHÁCH HÀNG</span>
          </h2>
          <div>
              <FontAwesomeIcon
                  icon={faStar}
                  style={{
                      marginRight: '.5rem',
                      color: '#FFCE3E',
                      fontSize: '1.8rem',
                  }}></FontAwesomeIcon>
              <span className='point'>{reviewPoint}</span>
              <span> / 5</span>
              <span className='description'>
                  Dựa trên đánh giá của 100 khách hàng đã sử dụng dịch vụ
              </span>
          </div>

          {reviewlist.map(review => 
            <ReviewItem key={review.id.toString()} data={review} />
          )}
          <a className='view-all-review' href='http://localhost:3001/customerReview'>
              <span className=''>Xem tất cả đánh giá</span>
          </a>
      </div>
  );
}

export default CustomerReview;
