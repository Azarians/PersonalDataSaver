import React from "react";
import s from "./AddPage.module.css";
import PersonsTable from "./PersonsTable/PersonsTable.jsx";
import PersonsForm from "./PersonsForm/PersonsForm.jsx";

const AddInformation = (props) =>{

  return(
    <div className={s.addPage} >
      <PersonsTable />
      <PersonsForm addPerson={props.addPerson} />

      
    </div>
  )
}


export default AddInformation
