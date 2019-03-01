import * as React from "React";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham-dark.css";

interface IProps {}
class Grid extends React.Component<IProps, AgGridReactProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      defaultColDef: {
        resizable: true,
        sortable: true
      },
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Engine", field: "engine" },
        { headerName: "Doors", field: "doors" },
        { headerName: "Power", field: "power" },
        { headerName: "Type", field: "carType" },
        { headerName: "Seats", field: "seats" }
      ],
      rowData: [
        {
          make: "BMW",
          model: "X3 (F25)",
          engine: "35i (306 Hp) xDrive Steptronic",
          doors: 5,
          power: 306,
          carType: "SUV",
          seats: "5"
        },
        {
          make: "BMW",
          model: "X3 (F25)",
          engine: "35d (313 Hp) xDrive Steptronic",
          doors: 5,
          power: 313,
          carType: "SUV",
          seats: "5"
        },
        {
          make: "BMW",
          model: "X3 (F25)",
          engine: "20i (184 Hp) xDrive",
          doors: 5,
          power: 184,
          carType: "SUV",
          seats: "5"
        },
        {
          make: "BMW",
          model: "X5 (G05)",
          engine: "M50d (400 Hp) Steptronic",
          doors: 5,
          power: 400,
          carType: "SUV",
          seats: "5"
        },
        {
          make: "Lamborghini",
          model: "Urus",
          engine: "4.0 V8 (650 Hp) 4WD Automatic",
          doors: 5,
          power: 650,
          carType: "SUV",
          seats: "4"
        },
        {
          make: "Range Rover",
          model: "Discovery Sport",
          engine: "2.0 Si4 (290 Hp) AWD Automatic",
          doors: 5,
          power: 290,
          carType: "SUV",
          seats: "5/7"
        },
        {
          make: "Range Rover",
          model: "Discovery Sport",
          engine: "2.2 SD4 (190 Hp) AWD Automatic",
          doors: 5,
          power: 190,
          carType: "SUV",
          seats: "5/7"
        },
        {
          make: "Audi",
          model: "Q7 (Typ 4M)",
          engine: "e-tron 3.0 TDI (374 Hp) quattro S tronic",
          doors: 5,
          power: 374,
          carType: "SUV",
          seats: "5"
        },
        {
          make: "Audi",
          model: "Q7 (Typ 4M)",
          engine: "45 TDI V6 (231 Hp) quattro MHEV Tiptronic",
          doors: 5,
          power: 231,
          carType: "SUV",
          seats: "5/7"
        }
      ]
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham-dark"
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <AgGridReact
          defaultColDef={this.state.defaultColDef}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Grid;
