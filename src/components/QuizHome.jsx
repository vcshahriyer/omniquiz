import React, { Component } from "react";
import { getCategory } from "../service/quizService";
import QuizCard from "./common/quizCard";

class QuizHome extends Component {
  state = {
    categories: []
  };
  async componentDidMount() {
    const { data } = await getCategory();
    this.setState({ categories: data.trivia_categories });
  }
  handleSearch = query => {
    let category = [...this.state.categories];
    category = category.filter(c =>
      c.name.toLowerCase().startsWith(query.toLowerCase())
    );
    this.setState({ categories: category });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.categories.map(category => {
          return (
            <QuizCard key={category.id} name={category.name} id={category.id} />
          );
        })}
      </React.Fragment>
    );
  }
}

export default QuizHome;
