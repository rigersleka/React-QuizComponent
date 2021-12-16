import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleSubmit() {
    console.log('Test');
  }

  render() {
    return (
      <div>
        <li>
          <button onClick={this.handleSubmit}>{this.props.button_text}</button>
        </li>
      </div>
    );
  }
}

export default QuizQuestionButton;
