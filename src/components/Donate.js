import React, { Component } from "react";
import axios from "axios";

class Donate extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=02c58619-3572-4bb1-b766-6f5dfb665319"
      )
      .then((res) => {
        console.log(res);
        this.setState({
          projects: res.data.projects.project.slice(0, 10),
        });
      });
  }
  render() {
    const { projects } = this.state;
    const projectList = projects.length ? (
      projects.map((project) => {
        return (
          <div
            className="row valign-wrapper card card-panel hoverable "
            key={project.id}
          >
            <div className="col l2 ">
              <a href={project.projectLink}>
                <img
                  className="circle"
                  src={project.imageLink}
                  width="110px"
                  height="110px"
                ></img>
              </a>
            </div>
            <div className=" col l10 card-content">
              <span className="card-title ">{project.title}</span>
              <p>{project.summary}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No projects yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Donate</h4>
        {projectList}
      </div>
    );
  }
}

export default Donate;
