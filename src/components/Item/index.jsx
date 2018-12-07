import React from 'react';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

const Item = ({ comments, handleAddComment }) => (
  <div className="item">
    <CommentList comments={comments} />
    <CommentForm onSubmit={handleAddComment} />
  </div>
);

export default Item;
