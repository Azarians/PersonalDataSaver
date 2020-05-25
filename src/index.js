import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onload = () =>{
  state.check()
}





let state = {

  readonly:'readOnly',

  persons: [],

  personsNew: [],


////////////////////////
/////CHECK//////////////
////////////////////////
  check(){
    console.log("check")
    let letPersons;
    if(JSON.parse(localStorage.getItem('persons')) !== null){
      letPersons = JSON.parse(localStorage.getItem('persons'))
      console.log(letPersons.length);
    }

  if(letPersons !== undefined && letPersons !== null){
	let i;
    for(i = 0; i < letPersons.length; i++){
      
  
      let name = 	letPersons[i].personName		;//document.getElementById("Name").value;
      let surname = letPersons[i].personSurname		;	//document.getElementById("Surname").value;
      let email = letPersons[i].personEmail		;	//document.getElementById("Email").value;
      let description = letPersons[i].personDescription	;		//document.getElementById("description").value;
      let birthday =letPersons[i].personBirthday;
  
      let gender = letPersons[i].personGender;
  
      let id;
  
  
      if(letPersons === null){
        id = 1;
      }else {
        
        id = letPersons[letPersons.length] + 1
      }
  
          this.persons.push({
          personName: name,
          personSurname: surname,
          personEmail: email,
          personDescription: description,
          personBirthday: birthday,
          personId: id,
          personGender: gender
  
        })
  
  
  
        
  
  

        let parrent = document.getElementById('a');
        let newLi = document.createElement('li');
        newLi.innerHTML = JSON.parse(localStorage.getItem('persons'))[i].personName;
        newLi.className = "person";

        newLi.personId = i + 1;//JSON.parse(localStorage.getItem('persons')).length - 1;
       
        parrent.appendChild(newLi)
        //parrent.appendChild(newLi);


      const liClicked = () =>{
        this.readonly = "";
                document.getElementById('editName').value = this.persons[Number(newLi.personId) - 1].personName;
                document.getElementById('editSurname').value = this.persons[Number(newLi.personId) - 1].personSurname;
                document.getElementById('editEmail').value = this.persons[Number(newLi.personId) - 1].personEmail;
                document.getElementById('editBirthday').value = this.persons[Number(newLi.personId) - 1].personBirthday;
                document.getElementById('id').value = `Person Id is ${String(newLi.personId)}`;
                document.getElementById('editDescription').value = this.persons[Number(newLi.personId) - 1].personDescription;
                document.getElementById('editGender').value = this.persons[Number(newLi.personId) - 1].personGender;
                reRender(this)

      }
      newLi.addEventListener('click', liClicked)
      console.log(parrent)

    }
  
  
  
  }
  
  console.log(this.persons)

  },

///////////////////////////
/////ADD PERSON//////////
////////////////////////////


  addPerson(){
    
    if(document.getElementById('Name').value.trim() === ""){
      alert("Enter Name");
      return
    }




    let name = document.getElementById("Name").value;
    let surname = document.getElementById("Surname").value;
    let email = document.getElementById("Email").value;
    let description = document.getElementById("description").value;
    let month = (document.getElementById("month").options[document.getElementById("month").selectedIndex]).text;
    let day = (document.getElementById("day").options[document.getElementById("day").selectedIndex]).text;
    let year = (document.getElementById("year").options[document.getElementById("year").selectedIndex]).text;
    let gender;


    if((document.getElementById("Female")).checked){gender = "Female"}
	  else if((document.getElementById("Male")).checked){gender = "Male"}
    else if((document.getElementById("Custom")).checked){gender = "Custom"}
    
    let id;


    if(JSON.parse(localStorage.getItem('persons')) === null){
      id = 1;
    }else {
      
      id = JSON.parse(localStorage.getItem('persons')).length + 1
    }

    this.persons.push({
      personName: name,
      personSurname: surname,
      personEmail: email,
      personDescription: description,
      personBirthday: String(month) + "/" + String(day) + "/" + String(year), 
      personId: id ,
      personGender: gender  
    })

    console.log(this.persons)
    console.log(this.persons.length);
    
    let parrent = document.getElementById('a');
   
    let newLi = document.createElement('li');
    newLi.innerHTML = this.persons[this.persons.length-1].personName;
    newLi.className = "person";
    
    newLi.personId = this.persons.length;


    newLi.onclick = () =>{
    	document.getElementById('editName').value = this.persons[Number(newLi.personId) - 1].personName;
    	document.getElementById('editSurname').value = this.persons[Number(newLi.personId) - 1].personSurname;
    	document.getElementById('editEmail').value = this.persons[Number(newLi.personId) - 1].personEmail;
    	document.getElementById('editBirthday').value = this.persons[Number(newLi.personId) - 1].personBirthday;
    	document.getElementById('id').value = `Person Id is ${String(newLi.personId)}`;
    	document.getElementById('editDescription').value = this.persons[Number(newLi.personId) - 1].personDescription;
      document.getElementById('editGender').value = this.persons[Number(newLi.personId) - 1].personGender;
      this.readonly = "";
      reRender(this)

    	
    }


    parrent.appendChild(newLi);

    
    localStorage.setItem('persons', JSON.stringify(this.persons))


    document.getElementById('addForm').reset()

    console.log(JSON.parse(localStorage.getItem("persons")))
  },

/////////////////////////////////////
///////EDIT PERSON/////////////
////////////////////////////////////

  editPersons(){
    if(this.readonly === 'readOnly'){return}

    let name = document.getElementById("editName").value;
    let surname = document.getElementById("editSurname").value;
    let email = document.getElementById("editEmail").value;
    let id = document.getElementById("id").value.trim()[document.getElementById("id").value.length - 1];
    let gender = document.getElementById("editGender").value;
    let description = document.getElementById("editDescription").value;
    let birthday = (document.getElementById("editBirthday")).value;
    
  
  this.personsNew = {
      personName: name,
      personSurname: surname,
      personEmail: email,
      personDescription: description,
      personBirthday: birthday, 
      personId: id, 
      personGender: gender    
    }
  
  
  this.persons[id-1] = this.personsNew;
  
    console.log(this.personsNew);
    console.log(this.persons);
  
       localStorage.setItem('persons', JSON.stringify(this.persons))
  
    
    //localStorage.persons = this.persons;
  
    document.getElementById('editorForm').reset()
    window.location.reload()

    this.readonly = "readOnly";
  },

  cancel(){
    debugger;

    
      document.getElementById('editorForm').reset()
      this.readonly = "readOnly";
      reRender(this);
  
 
  },



}


const reRender = (state) =>{

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(state)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


export default state