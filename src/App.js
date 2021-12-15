import React, { Component } from 'react';
import './App.css';

import QuizQuestion from './QuizQuestion.js';
import Quiz from './Quiz.js';

class App extends Component {
  render() {
    return (
      <div>
        <QuizQuestion />
        <Quiz/>
      </div>
    );
  }
}

export default App;
