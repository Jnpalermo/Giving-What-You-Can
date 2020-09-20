import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="left col l7 push-l5">
          <h4 className="home">A world where</h4>
          <h4 className="home">we can help</h4>
          <h4 className="home">eachother</h4>
        </div>
        <div>
          <img
            className="right col s5 pull-s7"
            src="para.png"
            height="400"
            width="200"
            style={{ marginTop: "60px" }}
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
