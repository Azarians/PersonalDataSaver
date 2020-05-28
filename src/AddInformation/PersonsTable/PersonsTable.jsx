import React from "react";
import s from "./PersonsTable.module.css";

let sear = React.createRef();

let pers = document.getElementsByClassName('person');


const inpChanged = (val,func) =>{
  for(let i = 0; i < pers.length; i++){
    if((pers[i].innerHTML.slice(0, val.length)).toUpperCase() === val.toUpperCase()){
      pers[i].style.display = "inline-block"
    }
    else{
      pers[i].style.display = "none"
    }
    
  }
}


const PersonsTable = (props) =>{
  debugger
  return(
    <>
    <div className={s.namesTable} id="namesTable" >

      <span className={s.search}>
        <textarea onChange={()=> inpChanged(sear.current.value)}id="search" placeholder="Search by name" ref={sear}></textarea>
        </span>

    <span className={s.heading}>Persons</span>

      <table>
        <td><ul id="a" className={s.a}></ul></td>
      </table>

    </div>

    <button onClick={clear}className={s.clear}>Clear all</button>


      </>
  )
}

const clear = () =>{
  const ok = window.confirm(`Are you sure to delete all information?`);

if(ok === true){localStorage.clear();window.location.reload()}else{return}

}
export default PersonsTable;
