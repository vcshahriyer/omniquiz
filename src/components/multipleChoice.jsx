import React, { Component } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { Button, ButtonToolbar, Spinner } from "react-bootstrap";
import { getQuestions } from "../service/quizService";

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: {},
      options: []
    };
  }

  makeOptions(currentQst) {
    const qst = [currentQst.correct_answer, ...currentQst.incorrect_answers];
    qst.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return qst;
  }
  async componentDidMount() {
    try {
      const categoryId = this.props.match.params.id;
      const { data } = await getQuestions(categoryId);
      const firstQuestion = data.results[0];
      if (data.response_code)
        throw new Error("No question found for this category");
      this.setState({
        res: data,
        questions: data.results,
        currentQuestion: firstQuestion,
        options: this.makeOptions(firstQuestion)
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        return this.props.history.replace("/not-found");
      } else {
        toast.error(ex.message);
      }
    }
  }

  handleNextQuestion = () => {
    const { questions, currentQuestion } = this.state;
    const index = questions.indexOf(currentQuestion) + 1;
    this.setState({ currentQuestion: questions[index] });
  };

  render() {
    const { currentQuestion, options } = this.state;
    return (
      <React.Fragment>
        {_.isEmpty(currentQuestion) ? (
          <ButtonToolbar>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </ButtonToolbar>
        ) : (
          <div className="quiz-box">
            <h3>{currentQuestion.question}</h3>
            <div className="quiz-options row">
              <div className="col-sm-6">
                <div className="quiz-option">a) {options[0]}</div>
                <div className="quiz-option">c) {options[1]}</div>
              </div>
              <div className="col-sm-6">
                <div className="quiz-option">b) {options[2]}</div>
                <div className="quiz-option">d) {options[3]}</div>
              </div>
            </div>
            <button
              onClick={() => {
                this.handleNextQuestion();
              }}
              className="btn btn-info ml-auto"
              type="button"
            >
              Next Question
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MultipleChoice;
