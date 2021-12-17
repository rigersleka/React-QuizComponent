import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
    };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }

    console.log(this.state.incorrectAnswer);
  }

  /*
    Most types of implementing Conditional_Rendering:
        1. Ternary Operator
        2. Using logigal &&

        (refenrece: https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications)
  */
  render() {
    //Ternary Operator
    const displayIncorrectAnswer = this.state.incorrectAnswer ? (<p className='error'>Sorry, that's not right.</p>): null;
   
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
          <div>
            {displayIncorrectAnswer}
          </div>
         {/* Conditional Rendering */}
          <div>
            {this.state.incorrectAnswer && (<p className='error'>TESTTEST</p>)}
          </div> 
        </section>
        <section className='buttons'>
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return (
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_option}
                    clickHandler={this.handleClick.bind(this)}
                  />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
