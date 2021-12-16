import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_question + 1,
    });
  }

  render() {
    return (
      <div>
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
          showNextQuestionHandler={this.showNextQuestion.bind(this)}
        />
      </div>
    );
  }
}
export default Quiz;
