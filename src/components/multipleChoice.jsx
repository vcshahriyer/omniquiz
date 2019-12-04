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
      options: [],
      score: 0,
      clicked: false,
      optionElements: [
        { id: 0, label: "A) ", class: "col-sm-6 quiz-option" },
        { id: 1, label: "B) ", class: "col-sm-6 quiz-option" },
        { id: 2, label: "C) ", class: "col-sm-6 quiz-option" },
        { id: 3, label: "D) ", class: "col-sm-6 quiz-option" }
      ]
    };
  }

  makeOptions(currentQst) {
    const options = [
      currentQst.correct_answer,
      ...currentQst.incorrect_answers
    ];
    options.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return options;
  }
  async componentDidMount() {
    try {
      this.state.optionElCopy = [...this.state.optionElements];
      const categoryId = this.props.match.params.id;
      const { data } = await getQuestions(categoryId);
      const firstQuestion = data.results[0];
      if (data.response_code)
        throw new Error("No question found for this category");
      this.setState({
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
    if (index >= questions.length) {
      return this.props.history.push(`/score/${this.state.score}`);
    }
    const newQuestion = questions[index];
    const options = this.makeOptions(newQuestion);
    this.setState({
      currentQuestion: newQuestion,
      options,
      clicked: false,
      optionElements: this.state.optionElCopy
    });
  };
  handleSelect = (el, value) => {
    const { currentQuestion, clicked } = this.state;
    let arr = [...this.state.optionElements];
    const index = arr.indexOf(el);
    if (clicked === false && value === currentQuestion.correct_answer) {
      arr[index] = { ...arr[index], class: "col-sm-6 quiz-option correct" };
      this.setState({
        score: this.state.score + 1,
        clicked: true,
        optionElements: arr
      });
    } else {
      if (clicked === false) {
        arr[index] = {
          ...arr[index],
          class: "col-sm-6 quiz-option wrong"
        };
      }
      this.setState({
        clicked: true,
        optionElements: arr
      });
      toast.success("Correct Answer: " + currentQuestion.correct_answer);
    }
  };
  render() {
    const { currentQuestion, options, score, optionElements } = this.state;
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
            <div className="quiz-options row">
              <div className="col-md-12 question">
                <h3>{currentQuestion.question}</h3>
              </div>
              {optionElements.map(option => (
                <div
                  key={option.id}
                  className={option.class}
                  onClick={() => {
                    this.handleSelect(option, options[option.id]);
                  }}
                >
                  {option.label + options[option.id]}
                </div>
              ))}
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
            <span className="badge badge-pill badge-success ml-5">
              Score: {score}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MultipleChoice;
