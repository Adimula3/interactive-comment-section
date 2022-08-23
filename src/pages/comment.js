import React from "react";
import '../styles/style.css';
import Reply from "./reply";

const Comment = ({comment}) => {
  return (
      <>
          <div className="comment">
              <div className="comment-container">
                  <div className="content d-flex">
                      <div className="scores">
                          <i className='bx bx-plus'></i>
                          <h6 className="score">{comment.score}</h6>
                          <i className='bx bx-minus'></i>
                      </div>
                      <div className="info d-flex">
                          <img src={require('../assets/avatars/image-amyrobson.png')} alt="" className="avatar-image"/>
                          <h5 className="user">{comment.user.username1}</h5>
                          <h6 className="createdAt">{comment.createdAt}</h6>
                          <a className="reply"><i className='bx bx-reply'></i>Reply</a>
                      </div>
                  </div>
                  <div className="message">
                      <p className="msg">{comment.content}</p>
                  </div>
                  <Reply />
              </div>
          </div>
      </>

  );
}
export default Comment;
