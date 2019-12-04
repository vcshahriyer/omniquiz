import React, { Component } from "react";
import { getCategory } from "../service/quizService";
import QuizCard from "./common/quizCard";

class QuizHome extends Component {
  state = {
    categories: [],
    searchQuery: ""
  };
  async componentDidMount() {
    const { data } = await getCategory();
    this.setState({ categories: data.trivia_categories });
  }
  handleSearch = query => {
    this.setState({ searchQuery: query });
  };
  getPageData = () => {
    const { searchQuery } = this.state;
    let category = [...this.state.categories];
    if (searchQuery) {
      category = category.filter(c =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    return category;
  };

  render() {
    const categories = this.getPageData();
    return (
      <React.Fragment>
        <div className="col-md-5 searchbox">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Search
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              onChange={e => {
                this.handleSearch(e.currentTarget.value);
              }}
            />
          </div>
        </div>
        {categories.map(category => {
          return (
            <QuizCard key={category.id} name={category.name} id={category.id} />
          );
        })}
      </React.Fragment>
    );
  }
}

export default QuizHome;
