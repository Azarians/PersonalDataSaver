import React from "react";
import s from "./PersonsTable.module.css";


const clear = () =>{
    const ok = window.confirm(`Are you sure to delete all information?`);
  
  if(ok === true){localStorage.clear();window.location.reload()}else{return}
  
}

const PersonsTable = (props) =>{
  return(
    <>
    <div className={s.namesTable} id="namesTable" >
        <h1>Persons</h1>

		    <ul id="a" >
            

		    </ul>
    </div>

    <button onClick={clear}
       className={s.clear}>Clear all
      </button>


      </>
  )
}


export default PersonsTable;
