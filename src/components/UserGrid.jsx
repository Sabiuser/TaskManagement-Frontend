import React from "react";
import { AgGridReact } from "ag-grid-react";

const UserGrid = ({ rowData, columnDefs ,className=""}) => {
  return (
    <div
     className={`ag-theme-alpine ${className}`}
    //   style={{ height: 400, width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default UserGrid;