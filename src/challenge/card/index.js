import React, { Component } from "react";
import "./index.css";

class card extends Component {
  state = {};

  render() {
    return (
      <div className="App2">
        <div className="top">
          <div className="dynamic">
            <button>VIP</button>
            <button>Free</button>
          </div>
          <div className="static">
            <button>
              <i class="icon2 glyphicon glyphicon-share-alt"></i>
            </button>
            <button>
              <i class="icon2 glyphicon glyphicon-heart-empty"></i>
            </button>
          </div>
        </div>
        <div className="mid">
          <div className="midFirst">
            <p>AUG</p>
            <p>22</p>
          </div>
          <div className="midSecond">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
          </div>
        </div>
        <div className="bot">
          <i class="icon2 glyphicon glyphicon-map-marker"></i>
          <p>Tunis, Tunisia</p>
        </div>
      </div>
    );
  }
}

export default card;
