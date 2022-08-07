import { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader-inner">
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
          &nbsp; Loading...
        </div>
      </div>
    );
  }
}

export default Loader;
