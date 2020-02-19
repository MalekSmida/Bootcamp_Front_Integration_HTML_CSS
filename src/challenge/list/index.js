import React, { Component } from "react";
import "./index.css";

import smile from "../../icons/smile.jpg";

class list extends Component {
  state = {
    participants: [
      {
        name: "Olga Butler",
        post: "CEO - Trexi",
        status: "Arrived",
        print: true
      },
      {
        name: "Vera Hunt",
        post: "CEO - Trexi",
        status: "Not yet arrived",
        print: false
      },
      {
        name: "Dustin Hayes",
        post: "CEO - Trexi",
        status: "Arrived",
        print: false
      },
      {
        name: "Minnie Romero",
        post: "CEO - Trexi",
        status: "Not yet arrived",
        print: false
      },
      {
        name: "Vincent Watts",
        post: "CEO - Trexi",
        status: "Arrived",
        print: false
      }
    ]
  };
  render() {
    return (
      <div className="App3">
        <div className="search3">
          <i class="icon glyphicon glyphicon-search"></i>
          <input placeholder="Search for participants by name"></input>
        </div>
        <div className="grid-container head3">
          <p className="grid-item grid-item-5">98 PARTICIPANT</p>
          <p className="grid-item grid-item-5">STATUS</p>
        </div>
        <div className="tab">
          {this.state.participants.map(part => (
            <div className="grid-container list3">
              <div className="grid-item grid-item-1 info3">
                <img src={smile} alt={"smile"} />
              </div>
              <div className="grid-item grid-item-4 info3">
                <div>{part.name}</div>
                <div>{part.post}</div>
              </div>
              <div
                className={
                  part.status === "Arrived"
                    ? "grid-item grid-item-5 arrived"
                    : "grid-item grid-item-5 notArrived"
                }
              >
                {part.status}
              </div>
              <div className="grid-item grid-item-2 icons3">
                {part.print && <i class="icon glyphicon glyphicon-print"></i>}
                <i class="icon glyphicon glyphicon-envelope"></i>
                <i class="icon glyphicon glyphicon-user"></i>
                <i class="icon glyphicon glyphicon-home"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default list;
