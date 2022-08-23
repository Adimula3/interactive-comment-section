import React, {useEffect, useState} from "react";
import Comment from "./comment";

const Comments = () => {

    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments;
    const getReplies = commentId => {
          return backendComments.filter(backendComment => backendComment.id >= 3)
    };
       console.log("backendComments", backendComments);
      useEffect(() => {
          fetch("http://localhost:8000/comments")
              .then((res) => res.json())
              .then((data) => {
                  setBackendComments(data);
              });
      }, []);
    return (
       <>
           <div>
               {rootComments.map((item) => (
                   <Comment key={item.id} comment={item} replies={getReplies(item.id)} />
               ))}
           </div>
       </>

    );
}
export default Comments;
