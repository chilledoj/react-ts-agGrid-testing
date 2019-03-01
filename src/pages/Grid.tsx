import * as React from "React";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham-dark.css";

interface IProps {}
class Grid extends React.Component<IProps, AgGridReactProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham-dark"
        style={{
          height: "600px",
          width: "500px"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Grid;
