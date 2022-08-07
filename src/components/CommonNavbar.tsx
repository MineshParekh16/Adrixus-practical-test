import { Button } from "primereact/button";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { bindActionCreators, Dispatch } from "redux";
import { IDashBoardState } from "../types/Dashboard";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { withRouter } from "../hoc/withRouter";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

class CommenNavbar extends Component<any, IDashBoardState> {
  toast: any;
  constructor(props: any) {
    super(props);
    this.state = {
      visibleRight: false,
      ConfirmDialogvisible: false,
      visible: false,
    };
    this.reject = this.reject.bind(this);
  }

  logout = () => {
    if (localStorage.getItem("rowData")) {
      // eslint-disable-next-line no-restricted-globals
      window.location.replace("/");
      localStorage.removeItem("rowData");
      this.toast.show({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    } else {
      alert("User Not Logged In");
    }
  };

  reject() {
    this.toast.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  }

  render() {
    const { email } = this.props.user.userData;
    return (
      <>
        <Toast ref={(el) => (this.toast = el)} />
        <ConfirmPopup />
        <Sidebar
          visible={this.state.visibleRight}
          position="right"
          onHide={() => this.setState({ visibleRight: false })}
        >
          <ConfirmDialog
            visible={this.state.ConfirmDialogvisible}
            onHide={() => this.setState({ ConfirmDialogvisible: false })}
            message="Are you sure you want signout?"
            header="Confirmation"
            icon="pi pi-exclamation-triangle"
            accept={this.logout}
            reject={this.reject}
          />
          <Button
            type="button"
            label="Sign out"
            className="mt-2"
            onClick={() => this.setState({ ConfirmDialogvisible: true })}
          />
          <h3>{email}</h3>
        </Sidebar>
        <main className="dashboard-container">
          <div className="header">
            <div className="logo">DashBoard</div>
            <h5>
              <Button
                icon="pi pi-bars"
                onClick={() => this.setState({ visibleLeft: true })}
                className="p-button p-button-outlined p-button-rounded"
              />
            </h5>
            <h4 className="name">
              {" "}
            </h4>
            <Button
              icon="pi pi-user"
              onClick={() => this.setState({ visibleRight: true })}
              className="p-button p-button-outlined p-button-rounded"
            />
          </div>
          <div className="content"></div>
        </main>
        <Sidebar
          visible={this.state.visibleLeft}
          position="left"
          onHide={() => this.setState({ visibleLeft: false })}
        >
          <Link to="/Dashboard" className="p-button p-button-success back-link">
            Dashboard
          </Link>
        </Sidebar>
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
)(withRouter(CommenNavbar));
