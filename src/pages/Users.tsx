import * as React from "React";
import { RouteComponentProps } from "react-router-dom";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-dark.css";

interface IProps extends RouteComponentProps {}
class Grid extends React.Component<IProps, AgGridReactProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "ID", field: "userId" },
        { headerName: "Username", field: "username" },
        { headerName: "Status", field: "status" }
      ],
      rowData: [
        { userId: 1, username: "USER001", status: "Active" },
        { userId: 2, username: "USER002", status: "Inactive" },
        { userId: 3, username: "ADMIN02", status: "Admin" }
      ]
    };
  }
  handleRowClick(e: any) {
    console.log(e.data.username);
    this.props.history.push("/users/" + e.data.username);
  }
  render() {
    return (
      <div
        className="ag-theme-dark"
        style={{
          height: "600px",
          width: "500px"
        }}
      >
        <AgGridReact
          onRowClicked={this.handleRowClick.bind(this)}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Grid;
