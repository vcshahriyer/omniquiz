import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavMenu from "./components/navBar";
import QuizHome from "./components/QuizHome";
import MultipleChoice from "./components/multipleChoice";
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
          <Route path="/" exact component={QuizHome} />
          <Route path="/quiz/:id" exact component={MultipleChoice} />
          <Route path="/not-found" exact component={QuizHome} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
