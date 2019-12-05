import React from "react";
import { Link } from "react-router-dom";
import getImage from "../../service/fakeImageService";
const QuizCard = ({ name, id }) => {
  const prefix = process.env.REACT_APP_CARD_IMG_URL;
  return (
    <figure className="Qcard">
      <div className="image">
        <img src={prefix + getImage(id)} alt="pr-sample23" />
      </div>
      <figcaption>
        <div className="circle">
          <span className="day">10</span>
          <span className="month">MCQ</span>
        </div>
        <h3>{name}</h3>
        <p>
          The Open Trivia Database provides a completely free JSON API of
          multiple choice Questions .
        </p>
      </figcaption>
      <Link to={`/quiz/${id}`} />
    </figure>
  );
};

export default QuizCard;
