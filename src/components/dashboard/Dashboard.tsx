import { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "../../hoc/withRouter";
import { IDashBoardState } from "../../types/Dashboard";
import { RootState } from "../../redux/store";
import UserList from "./userlists/userList";

class Dashboard extends Component<any, IDashBoardState> {
  render() {
    return (
      <>
        Welcome, 
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;

        <UserList/>
      </>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {
    isLoading: state.loader.isLoading,
    user: state.user,
  };
}

const actionsDispatch: any = Object.assign({}, {});
function mapDispacthToProps(dispacth: Dispatch) {
  return {
    actions: bindActionCreators(actionsDispatch, dispacth),
  };
}

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(withRouter(Dashboard));
