import React, { Component } from 'react';
import Rating from './Rating';

const ratingOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

class CommentForm extends Component {
  state = {
    text: '',
    rate: ratingOptions[9],
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, rate } = this.state;
    const { onSubmit } = this.props;

    if (text === '') {
      return;
    }

    onSubmit({ text, rate });
    this.setState({ text: '', rate: ratingOptions[9] });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleRatingChange = e => {
    this.setState({
      rate: e.target.value,
    });
  };

  render() {
    const { text, rate } = this.state;
    return (
      <form className="comments-form" onSubmit={this.handleSubmit}>
        <textarea
          className="comments-textarea"
          name="text"
          value={text}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />

        <Rating
          options={ratingOptions}
          rate={rate}
          onChange={this.handleRatingChange}
        />
        <button className="comments-btn" type="submit">
          Comment
        </button>
      </form>
    );
  }
}
export default CommentForm;
