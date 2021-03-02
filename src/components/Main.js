import React,{useState} from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./Icons";
import MyStepper from "./Stepper";
export default function Main() {
  
  const { useState } = React;
  const [columns, setColumns] = useState([
    
    { title: "Name", field: "name" },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ]);
  
  const [dialogeBox, setDialogeBox] = useState(false);
  const [data, setData] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);
const handleDialog = () => {
  setDialogeBox(true)
}

  return (
    <>
      {dialogeBox ? (
        <MyStepper/>
      ) : (
        <MaterialTable
          title="Editable Preview"
          columns={columns}
          icons={tableIcons}
          data={data}
          actions={[
            {
              icon: tableIcons.Add,
              isFreeAction: true,
              onClick: handleDialog,
            },
          ]}
        />
      )}
    </>
  );
}
