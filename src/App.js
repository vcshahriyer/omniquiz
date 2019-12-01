import React from "react";
import NavMenu from "./components/navBar";
import QuizCard from "./components/common/quizCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavMenu />
      <div className="container">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </React.Fragment>
  );
}

export default App;
