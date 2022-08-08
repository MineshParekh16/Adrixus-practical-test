import React, { Component } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { APIServices } from "../services/Common";
import { USER_LIST_URL } from "../constant/api.js"

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      UserList: [],
      show: false,
      rows: 5,
      filter: {
        global: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
      },
      globalFilterValue: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      this.setState({ userData: data.data });
    }).catch((error) => {
      console.log('error: ' + error);
      this.setState({ requestFailed: true });
    });
    this.getUserList();
  }

  getUserList = () => {
    APIServices.getUserData(USER_LIST_URL).then((res) => {
      console.log("res", res.data);
      const data = res.data;
      this.setState({ UserList: data });
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

  onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let filters = { ...this.state.filter };
    filters["global"].value = value;
    this.setState({ filter: filters, globalFilterValue: value });
  };

  onIndex(data, props) {
    return props.rowIndex + 1;
  }

  render() {
    const { UserList, filter, rows } = this.state;
    const header1 = this.renderHeader1();
    return (
      <div>
        <div className="user-details">
        <div className="user-nme">User Name:- <h4>{this.state.userData.fname}</h4></div>
        <div className="user-nme">User Email:- <h4>{this.state.userData.email}</h4></div>
        </div>
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
          globalFilterFields={["Index", "postId", "name", "email","body"]}
          showGridlines
        >
          <Column field="Index" header="Sr.no" body={this.onIndex} />
          <Column field="postId" header="User Id" body={this.onIndex} />
          <Column field="name" header="Name" sortable></Column>
          <Column field="email" header="Email" sortable></Column>
          <Column field="body" header="Body" sortable></Column>
        </DataTable>
      </div>
    );
  }
}
