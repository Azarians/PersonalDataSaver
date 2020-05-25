import React from "react";
import s from "./EditInformation.module.css";

const EditInformation = (props) =>{



  let readonly = props.readonly;



  if(readonly === ""){console.log("ok")}
  return(
    <div>
      
      <div className={s.editor}>
        <h1 className={s.personName} id="personsName">Personal Information</h1>
        <form className={s.editorForm} id="editorForm">
          <input className={s.editName} placeholder="editName" id="editName" autoComplete='off' readOnly={readonly}/> 

          <input className={s.editSurname} placeholder="editSurname" id="editSurname" autoComplete='off' readOnly={readonly}/> 

          <input className={s.editEmail} placeholder="editEmail" id="editEmail" autoComplete='off' readOnly={readonly}/> 

          <input className={s.editBirthday} placeholder="editBirthday" id="editBirthday" autoComplete='off' readOnly={readonly}/> 

          <input className={s.id}  placeholder="id" id="id" autoComplete='off' readOnly={readonly}/>

          <input className={s.editGender}  placeholder="editGender" id="editGender" autoComplete='off' readOnly={readonly}/> 

          <textarea className={s.editDescription} placeholder="editDescription" id="editDescription" autoComplete='off' readOnly={readonly}></textarea>

          <input type="button" className={s.cancel} onClick={() => props.cancel()} value="Cancel" id="cancel" />
          <input type="button" className={s.edit} onClick={() => props.editPersons()} value="Edit"/>
        </form>
      </div>
    </div>
  )
}

export default EditInformation
