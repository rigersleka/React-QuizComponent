import React from 'react';

const QuizQuestion = (props) => {
  return (
    <main>
      <section>
        <p>
          {props.quiz_question.instruction_text}
        </p>
      </section>
      <section className='buttons'>
        <ul>
          <li>{props.quiz_question.answer_options[0]}</li>
        </ul>
      </section>
    </main>
  );
};

export default QuizQuestion;