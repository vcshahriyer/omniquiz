import React from "react";
import party from "../assets/party.png";
const FinalScore = props => {
  let score = props.match.params.score * 10;
  return (
    <div className="score-box">
      <h1>Your Final Score is : {score}%</h1>
      <img src={party} alt="party" />
    </div>
  );
};

export default FinalScore;
