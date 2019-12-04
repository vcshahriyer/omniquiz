import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavMenu from "./components/navBar";
import QuizHome from "./components/QuizHome";
import MultipleChoice from "./components/multipleChoice";
import FinalScore from "./components/finalScore";
import NotFound from "./components/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavMenu />
      <main className="container">
        <Switch>
          <Route path="/quiz/:id" exact component={MultipleChoice} />
          <Route path="/score/:score" exact component={FinalScore} />} />
          <Route path="/" exact component={QuizHome} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
