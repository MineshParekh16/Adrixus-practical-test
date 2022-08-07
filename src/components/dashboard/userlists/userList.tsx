import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Toast } from "primereact/toast";
import { RootState } from "../../../redux/store";
import { withRouter } from "../../../hoc/withRouter";
import { IDashBoardState } from "../../../types/Dashboard";
import { APIServices } from "../../../services/Common";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog } from "primereact/confirmdialog";
import {
  USER_LIST_URL,
} from "../../../constant/api";
import {
  ERROR_MESSAGE,
  toastSeverity,
  toastSummary,
} from "../Constants/MessageConst";

class UserList extends Component<any, IDashBoardState> {
  toast: any;

  constructor(props: any) {
    super(props);
    this.state = {
      UserList: [],
      visibleRight: false,
      visibleLeft: false,
      show: false,
      rows: 5,
      filter: {
        global: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
      },
      globalFilterValue: "",
      checked: false,
    };
  }

  componentDidMount() {
    this.getUserList();
  }
  getUserList = () => {
    APIServices.getUserData(USER_LIST_URL).then((res) => {
      const data = res.data.data;
      this.setState({ UserList: data });
      console.log(data);
    });
  };

  renderHeader1() {
    const { globalFilterValue } = this.state;
    return (
      <>
        <div className="flex justify-content-between">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />

            <InputText
              value={globalFilterValue}
              onChange={this.onGlobalFilterChange}
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </>
    );
  }

  reject() {
    this.toast.show({
      severity: toastSeverity[3],
      summary: toastSummary[3],
      detail: `${ERROR_MESSAGE}`,
      life: 3000,
    });
  }

  onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let filters = { ...this.state.filter };
    filters["global"].value = value;
    this.setState({ filter: filters, globalFilterValue: value });
  };

  onIndex(data: any, props: any) {
    return props.rowIndex + 1;
  }

  render() {
    const { UserList, filter, rows } = this.state;
    const header1 = this.renderHeader1();
    return (
      <>
        <Toast ref={(el) => (this.toast = el)} position="center" />
        <ConfirmDialog />
        <DataTable
          className="category-dt"
          header={header1}
          value={UserList}
          filters={filter}
          responsiveLayout="scroll"
          paginator
          rows={rows}
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          globalFilterFields={["id", "slug", "page_title", "status"]}
          showGridlines
        >
          <Column field="Index" header="Sr.no" body={this.onIndex} />
          <Column field="id" header="User Id" body={this.onIndex} />
          <Column field="email" header="Email" sortable></Column>
          <Column field="first_name" header="User First Name" sortable></Column>
          <Column field="last_name" header="User Last Name" sortable></Column>
          <Column field="avatar" header="Image" sortable></Column>
        </DataTable>
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
)(withRouter(UserList));
