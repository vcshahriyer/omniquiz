import React from "react";
import { Link } from "react-router-dom";
import getImage from "../../service/fakeImageService";
const QuizCard = ({ name, id }) => {
  return (
    <figure class="Qcard">
      <div class="image">
        <img src={getImage(id)} alt="pr-sample23" />
      </div>
      <figcaption>
        <div class="date">
          <span class="day">10</span>
          <span class="month">MCQ</span>
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
