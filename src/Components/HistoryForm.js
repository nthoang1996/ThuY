import React, { useState, useEffect } from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { diseaseHistorySelector ,currentUserSelector, allUsers} from "../selectors/selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDiseasetHistoryInfo, setCurrentUserId ,addNewDiseaseHistory} from "../redux/App/action";
import ReactStars from "react-rating-stars-component";
import { baseHost } from "../data_static";
import {
    faPencilAlt,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import {
} from "@atlaskit/dropdown-menu";
import { Modal } from 'react-bootstrap';



const HistoryForm = (props) => {
    const dispatch = useDispatch();
    const diseaseHistory = useSelector(diseaseHistorySelector);
    const currentUser=useSelector(currentUserSelector);
    useEffect(()=>{
            dispatch(getDiseasetHistoryInfo(currentUser.id));
    },[])
 
    const [show, setShow] = useState(false);
    const [showEvaluate, setShowEvaluate] = useState(false);
    const [evaluate, setevaluate] = useState({});
    const [showHistory, setShowHistory] = useState(false);
    const [newRating, setStar] = useState(0);
    const [comment, setComment] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseEvaluate = () => setShowEvaluate(false);
    const handleShowEvaluate = () => setShowEvaluate(true);
    const handleCloseHistory = () => setShowHistory(false);
    const handleShowHistory = () => setShowHistory(true);
    const onclickEvaluate=(item)=>setevaluate(item);
    const ratingChanged = (rating) => {
        setStar(rating);
        
    };
    const onclickEdit=(val)=>{
        setevaluate(val);
        setComment(val.comment);
        setStar(val.star)
    }
    const handelComment=(event)=>setComment(event.target.value)
    const newDiseaseHistory={
        id:evaluate.id,
        star:newRating,
        service:evaluate.service,
        pet:evaluate.pet,
        time:evaluate.time,
        status:true,
        customerName:evaluate.customerName,
        doctorName:evaluate.doctorName,
        userId:evaluate.id,
        comment:comment,
        cost:evaluate.cost,
    }
    
const alertStyle = { color: "orangered", fontSize: "0.8rem" };
  const  onClickAdd=()=>{
   
        dispatch(addNewDiseaseHistory(newDiseaseHistory));
       
      setevaluate(newDiseaseHistory);
    }
    return (
        <div className="container">
            <div>
            <div
        style={{ marginTop: "1rem", cursor: "pointer", fontSize: "0.75rem" }}
        onClick={() => window.location.replace(`${baseHost}/`)}
      >
       Hồ sơ khám bệnh  /{" "}
        <span style={{ fontWeight: "bold", color: "#009688" }}>
        Lịch sử khám bệnh
        </span>
      </div>
            
                <h2 className="section-title" onClick={handleShowHistory}>LỊCH SỬ KHÁM BỆNH </h2>
                <div class="row " >
                    {diseaseHistory.map(item =>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6  " key={item.id}
                        >
                            <div className="cssBox">
                                <div className="row" >
                                    <div class="col-sm-4  ">
                                        <b>Dịch vụ</b></div>
                                    <div class="col-sm-8">{item.service}</div>
                                </div>
                                <div className="row">
                                    <div class="col-sm-4">
                                        <b>Thú nuôi</b></div>
                                    <div class="col-sm-8">{item.pet}</div>
                                </div>
                                <div className="row">
                                    <div class="col-sm-4 ">
                                        <b>Thời gian</b></div>
                                    <div class="col-sm-8">{item.time}</div>
                                </div>
                                <div className="row">
                                    <div class="col-sm-4 ">
                                        <b>Chí phí</b></div>
                                    <div class="col-sm-8">{item.cost}</div>
                                </div>
                                <div className="row mt-4">
                                    <div class=" col-4 col-sm-4 offset-1 ">
                                        <button type="button" class=" button btn " style={{ width: '80%' }} data-toggle="modal" data-target="#exampleModalCenter1" >Chi tiết </button>
                                    </div>
                                    <div class="col-6 col-sm-6 ">
                                        {item.status === false ?
                                            <button type="button" class="button btn " style={{ width: '60%' }} onClick={() => {handleShowEvaluate();onclickEvaluate(item)}}>Viết đánh giá</button>
                                            :
                                            <button type="button" class="button btn " style={{ width: '60%' }} onClick={()=>{handleShow();onclickEvaluate(item)}}>Xem đánh giá</button>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                    )}

                </div>
            </div>
         
         
            <Modal show={show} onHide={handleClose} size="md"
            >
                <Modal.Body >
                    <div className="popup">
                        <b className="textTitle mt-5">DỊCH VỤ ĐÃ SỬ DỤNG</b>
                        <div className="row mt-3  " style={{ lineHeight: '1rem' }} >
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6   " >
                                <div className="d-flex justify-content-start">
                                    <b>Khách hàng: </b>
                                    <p className="info" > {evaluate.customerName}</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <b>Thú nuôi: </b>
                                    <p className="info"> {evaluate.pet}</p>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <b>Dịch vụ: </b>
                                    <p className="info">  {evaluate.service}</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6  " >
                                <div className="d-flex justify-content-start ">
                                    <b>Ngày thăm khám:  </b>
                                    <p className="info"> {evaluate.time}</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <b>Bác sĩ thăm khám:  </b>
                                    <p  className="info"> {evaluate.doctorName}</p>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <b>Chi phí:</b>
                                    <p className="info">   {evaluate.cost}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <b className="textTitle" >ĐÁNH GIÁ CỦA BẠN</b>
                            <ReactStars
                                count={5}
                                value={evaluate.star}
                                onChange={ratingChanged}
                                size={25}
                                activeColor="#ffd700"
                            />
                            <div className="mt-2" >
                                <FontAwesomeIcon
                                onClick={() => {handleShowEvaluate();onclickEdit(evaluate)}}
                                    icon={faPencilAlt}
                                    style={{ marginRight: ".5rem" }}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                 onClick={() => {dispatch(addNewDiseaseHistory());}}
                                    icon={faTrashAlt}
                                    style={{ marginRight: ".5rem" }}
                                ></FontAwesomeIcon>
                            </div>

                        </div>
                        <p className="textDescristion">
                        {evaluate.comment}
                         </p>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    className="service-img"
                                    src="meo.jpg"
                                    width="100%"
                                ></img>
                            </div>
                            <div className="col-4">
                                <img
                                    className="service-img"
                                    src="meo.jpg"
                                    width="100%"
                                ></img>
                            </div>
                            <div className="col-4">
                                <img
                                    className="service-img"
                                    src="meo.jpg"
                                    width="100%"
                                ></img>
                            </div>
                        </div>
                        <button type="button" class="button btn " onClick={()=>{handleClose();  dispatch(getDiseasetHistoryInfo(currentUser.id))}} style={{ width: '20%', float: 'right', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ĐÓNG</button>
                    </div>

                </Modal.Body>
            </Modal>
            <Modal show={showEvaluate} onHide={handleCloseEvaluate}>
                <Modal.Body>
                    <div className="popup">
                        <b className="textTitle mt-5">DỊCH VỤ ĐÃ SỬ DỤNG</b>
                        <div className="row mt-3  " style={{ lineHeight: '1rem' }} >
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6   " >
                                <div className="d-flex justify-content-start">
                                    <b>Khách hàng: </b>
                                    <p className="info" > {evaluate.customerName}</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <b>Thú nuôi: </b>
                                    <p className="info">  {evaluate.pet}</p>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <b>Dịch vụ: </b>
                                    <p className="info">{evaluate.service}</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6  " >
                                <div className="d-flex justify-content-start ">
                                    <b>Ngày thăm khám:  </b>
                                    <p className="info"> {evaluate.time}</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <b>Bác sĩ thăm khám:  </b>
                                    <p className="info">  {evaluate.doctorName}</p>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <b>Chi phí:  </b>
                                    <p className="info">  {evaluate.cost} </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <b className="textTitle" >ĐÁNH GIÁ CỦA BẠN</b>
                            <div style={{ marginLeft: '1rem' }}>
                                <ReactStars
                                    count={5}
                                    value={newRating}
                                    onChange={ratingChanged}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <textarea placeholder="Nhận xét của bạn..." value={comment} onChange={handelComment}
                      
                      style={{ borderRadius: '0.3rem', height: '15rem', width: '100%' }}></textarea>
                        <div style={alertStyle}>&nbsp;*</div>

                        <div className="row " style={{ margin: '0.7rem' }}>
                            <div class=" col-3 offset-6 d-flex" >
                                <button type="button" class=" button btn " style={{ width: '90%', float: "right" }} onClick={handleCloseEvaluate}>HỦY</button>
                            </div>
                            <div class="col-3 ">
                                <button type="button" class="button btn " style={{ width: '90%', float: 'left' }} 
                                 onClick={() => {onClickAdd();handleCloseEvaluate()}}>GỬI</button>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
             <Modal show={showHistory} >
                 <Modal.Body>
                 <div className="popupEditHistory">
                            <b className="textEditHistory mt-5" >LỊCH SỬ CHỈNH SỬA</b>
                            {diseaseHistory.map(item =>
                            <div key={item.id} style={{
                                display: "block",
                                border: " thin solid gray",
                                padding: "1rem",
                                marginTop: '1rem',
                            }}>
                                <div className="d-flex justify-content-start">
                                    <b>{item.customerName} </b>
                                    <p className="mt-1" style={{ fontSize: "14px", marginLeft: '5px' }}>8 tiếng trước</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                 xss   <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        value={item.star}
                                        size={27}
                                        activeColor="#ffd700"
                                    />
                                    <p className=" infoEditHistory">{item.service}</p>
                                    <p className="infoEditHistory">Thú nuôi:<span className="info">{item.pet}</span> </p>
                                </div>
                                <p className="textDescristion">
                                 {item.comment}
                         </p>
                                <div className="row">
                                    <div className="col-4">
                                        <img
                                            className="service-img"
                                            src="meo.jpg"
                                            width="100%"
                                        ></img>
                                    </div>
                                    <div className="col-4">
                                        <img
                                            className="service-img"
                                            src="meo.jpg"
                                            width="100%"
                                        ></img>
                                    </div>
                                    <div className="col-4">
                                        <img
                                            className="service-img"
                                            src="meo.jpg"
                                            width="100%"
                                        ></img>
                                    </div>
                                </div>

                            </div>

                            )}
                            <button type="button" class="button btn " style={{ width: '20%', float: 'right', margin: '1.5rem 0rem' }} onClick={handleCloseHistory}>ĐÓNG</button>
                        </div>
                  
                 </Modal.Body>
             </Modal>
        </div >


    );
};

export default HistoryForm;
