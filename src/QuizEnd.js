import React, { Component } from 'react';

class QuizEnd extends Component {
  handleResetClick(test) {
    this.props.resetClickHandler();
    console.log('Reset Button');
  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>

        <button onClick={this.handleResetClick.bind(this)}>ResetButton</button>
      </div>
    );
  }
}

export default QuizEnd;
