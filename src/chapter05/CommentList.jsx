import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김인성",
        comment: "안녕하세요!"
    },
    {
        name: "장영선",
        comment: "반갑습니다!"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => { //javascript 배열의 map함수
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;