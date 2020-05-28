import React from 'react';
import './App.css';
import AddPage from "./AddInformation/AddPage.jsx";
import EditInformation from "./EditInformation/EditInformation.jsx"

//const onload = (func) =>{
    ///  func()
//}

function App(props) {
  debugger
  return (
    <div className="App" //onLoad={ onload(props.state.check.bind(props.state))} //props.state.check()
    >
        <AddPage addPerson={props.state.addPerson.bind(props.state)}  />
        <EditInformation editPersons={props.state.editPersons.bind(props.state)} readonly={props.state.readonly} cancel={props.state.cancel.bind(props.state)}/>
    </div>

  );
}

export default App;


