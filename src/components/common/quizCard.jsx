import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Card } from "react-bootstrap";

const QuizCard = () => {
  return (
    <Card border="info" style={{ width: "18rem" }}>
      <Card.Header>HTML / HTML 5</Card.Header>
      <Card.Body>
        <Card.Title>HTML Quiz</Card.Title>
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
