import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import { Card } from "react-bootstrap";

const QuizCard = ({ name, id }) => {
  return (
    <Card border="info" style={{ width: "18rem" }}>
      <Card.Header>10 Multiple Choice Question</Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`/quiz/${id}`}>{name}</Link>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Best Score:
        <ProgressBar striped variant="success" now={20} label={"20%"} />
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
