import React from "react";
import '../styles/style.css';

const Reply = ({comment}) => {
   return (
       <div className="replies">
           <div className="reply-container">
               <div className="reply-content d-flex">
                   <div className="scores">
                       <i className='bx bx-plus'></i>
                       <h6 className="score"></h6>
                       <i className='bx bx-minus'></i>
                   </div>
                   <div className="info d-flex">
                       <img src={require('../assets/avatars/image-amyrobson.png')} alt="" className="avatar-image"/>
                       <h5 className="user"></h5>
                       <h6 className="createdAt"></h6>
                       <a className="reply-text"><i className='bx bx-reply'></i>Reply</a>
                   </div>
               </div>
               <div className="message">
                   <p className="msg"></p>
               </div>
           </div>
       </div>
   )
};
export default Reply;
