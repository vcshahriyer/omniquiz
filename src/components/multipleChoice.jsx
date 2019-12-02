import React, { Component } from "react";

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="quiz-box">
          <h3>This is an example Quiz Question ?</h3>
          <div className="quiz-options row">
            <div className="col-sm-6">
              <div className="quiz-option">
                a) First option Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur fuga deserunt vitae doloribus
                debitis, maiores eveniet temporibus dicta est fugiat, neque
                cumque rerum. Quidem non at, velit ullam laborum ipsam?
              </div>
              <div className="quiz-option">
                b) Second option Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel quae animi maxime magni doloribus fugit
                tenetur quam est ullam, atque illo deserunt debitis commodi
                reiciendis pariatur ut dolorum facere! Perferendis.
              </div>
            </div>
            <div className="col-sm-6">
              <div className="quiz-option">
                c) Third option Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid nesciunt fuga quas soluta neque
                cupiditate ipsam, hic esse aspernatur dignissimos laudantium
                similique, dolore ullam. A at quibusdam alias veritatis aperiam!
              </div>
              <div className="quiz-option">
                d) Fourth option Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cumque, omnis modi voluptatibus, nisi eveniet
                voluptatem ipsa aliquam sunt maiores incidunt rerum. Aut libero
                debitis repellat blanditiis facere, optio labore nisi?
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MultipleChoice;
