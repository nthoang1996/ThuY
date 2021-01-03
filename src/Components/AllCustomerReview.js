import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import './myCSS.css';
import axios from 'axios';
import { jsonServerHost, baseHost } from '../data_static';
import ReactStars from 'react-rating-stars-component';
import Review from './Review';
import { customerReviewSelector } from "../selectors/selector";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerReview } from '../redux/App/action';

const AllCustomerReview = props => {
  const customerReview = useSelector(customerReviewSelector);
  console.log("customerReview", customerReview);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(1);
  const [type, setType] = useState(1);
  const [typePet, setTypePet] = useState("null");
  const [customerReviewVM, setCustomerReviewVM] = useState(customerReview);

  useEffect(() => {
    dispatch(getCustomerReview());
  }, []);

  useEffect(() => {
    let temp = [...customerReview]
    if(sort == 2){
      temp=temp.sort((a,b) => a.time > b.time);
    }
    else if(sort == 3){
      temp = temp.sort((a,b) => a.time < b.time);
    }
  
    if(type !==1){
      temp = temp.filter(obj=>obj.type == type)
    }
  
    if(typePet !=="null"){
      temp = temp.filter(obj => obj.petType == typePet)
    }

    setCustomerReviewVM(temp);
  }, [sort, type, typePet, customerReview]);

  return (
    <div className='container container-custom'>
      <div className='heading'><span>ĐÁNH GIÁ CỦA KHÁCH HÀNG</span></div>
      <Filter setSort = {setSort} setTypePet= {setTypePet} setType={setType}/>
      {customerReviewVM.map(review => (
        <Review key={review.id.toString()} data={review} />
      ))}
    </div>
  );
};

const Filter = ({setSort, setType, setTypePet}) => {

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  }

  const handleChangeType = (event) => {
    setType(event.target.value);
  }

  const handleChangeTypePet = (event) => {
    console.log("1123132132");
    setTypePet(event.target.value);
  }

  return (
    <div className='filter-bar'>
      <div className='left-side'>
        <FontAwesomeIcon
          icon={faSortAmountDownAlt}
          style={{
            marginRight: '.5rem',
            color: 'var(--icon-color)',
            fontSize: '1.8rem',
          }}></FontAwesomeIcon>
        <span>Sắp xếp</span>
      </div>
      <div className='right-side'>
        <span>Lọc</span>
        <select className='filter-item' name='time' id='time' defaultValue={1} onChange={event => handleChangeSort(event)}>
          <option value = {1}>Theo thời gian</option>
          <option value = {2}>Cũ nhất</option>
          <option value = {3}>Mới nhất</option>
        </select>
        <select className='filter-item' name='serviceType' id='serviceType' defaultValue={1} onChange={event => handleChangeType(event)}>
          <option value = {1}>Loại dịch vụ</option>
          <option value = {2}>Khám sức khỏe tổng quát</option>
          <option value = {3}>Tiêm phòng</option>
          <option value = {4}>Triệt sản</option>
        </select>
        <select className='filter-item' name='petType' id='petType' defaultValue={"null"} onChange={event => handleChangeTypePet(event)}>
          <option value = {"null"}>Thú nuôi</option>
          <option value = {"Chó"}>Chó</option>
          <option value = {"Mèo"}>Mèo</option>
        </select>
      </div>
    </div>
  );
};

export default AllCustomerReview;
