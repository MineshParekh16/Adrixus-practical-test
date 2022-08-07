import { Component } from "react";
import { Outlet } from "react-router-dom";

export class DashBoardRoute extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}
