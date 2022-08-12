import React,{ useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { APIServices } from "../service/CustomerService";
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { USER_LIST_URL } from "../constant/api.js"

const Dashboard = ({ auth: { user } }) => {

	const [customers, setCustomers] = useState([]);
	const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS }
	});
	const [globalFilterValue, setGlobalFilterValue] = useState('');

	useEffect(() => {
        APIServices.getUserData(USER_LIST_URL).then((res) => {
			const data = res.data;
			setCustomers( data );
		});
    },[]);

	const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    }

	const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">User Details</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

	const header = renderHeader();

	return (
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Welcome, {user && user.name}</h1>
			<div className="card">
				<DataTable
					className="category-dt"
					value={customers}
					paginator header={header} rows={10} filters={filters} filterDisplay="menu" responsiveLayout="scroll" globalFilterFields={['postId', 'name', 'email', 'body']}
				>
					<Column field="postId" header="User Id" />
					<Column field="name" header="Name" sortable></Column>
					<Column field="email" header="Email" sortable></Column>
					<Column field="body" header="Body" sortable></Column>
                </DataTable>
            </div>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
