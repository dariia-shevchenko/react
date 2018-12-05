import React from 'react';

const CommentList = ({ comments }) => (
  <div className="comments">
    <p className="comments-title">Comments</p>

    <ol className="comments-list">
      {comments.map(comment => (
        <li className="comments-item" key={comment.id}>
          <span>{comment.text}</span>
          <span className="comments-star">{comment.rate}</span>
        </li>
      ))}
    </ol>
  </div>
);

export default CommentList;
