import React, {useState} from 'react';
import '../App.css';

const EditJob = () => {
    const arr1 = ["Job Number", "Business Offering", "Plant ID", "Smart Application"]
    const arr2 = ["96400", "Industrail Scaffolding", "1507337"]
    const arr3 = ["Job Description", "Service Line", "Implementation Date"]
    const arr4 = ["Time & Material", "Maintenance Scaffodling TM", "08/13/22"]
    const arr5 = ["Active", "Enable Interval Days", "Business Rules Validation", "Enable Interval Days", "Fleet Module"]
    const arr6 = ["Current GPS", "Current PO#", "Current WO#", "Location Description", "Tag Description", "Current image", "Current Status", "Equipment", "Requestor Email"]
    const arr7 = ["Access Type", "Starting Elevation", "Sum LegFt", "Sum Pieces", "System Type", "Total Height", "Total Length", "Scaffold Type", "Sum Cubic Ft", "Sum Material Weight", "Sum SqFt", "Total Decks", "Total Legs", "Totak Width"]
    const [dataproperties, setDataproperties] = useState(false)
    const [datatag, setDatatag] = useState(false)
    const handleProperties = () => setDataproperties(!dataproperties)
    const handleTag = () => setDatatag(!datatag)

  return (
    <>
      <header className="Edit-header">
        <div style={{display: "flex"}}>
        <h1>CP Chem Pasedena</h1>
        <h2>Edit Job</h2>
        </div>
        <hr/>
        <content style={{display: "flex"}}>
            <ul>
            {arr1.map((elem) => <ul type="none" key={elem.id}>{elem}</ul>)}
            </ul>
            <ul>
            {arr2.map((elem) => <ul type="none" key={elem.id}>{elem}</ul>)}
            </ul>
            <ul>
            {arr3.map((elem) => <ul type="none" key={elem.id}>{elem}</ul>)}
            </ul>
            <ul>
            {arr4.map((elem) => <ul type="none" key={elem.id}>{elem}</ul>)}
            </ul>
        </content>
        <span>
            Smart Application
            <label>
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
            Smart Tag
            </label>
            </span>
        <hr />
        <fieldset>
    <legend> 
        <button onClick={handleProperties}>Properties</button>
        <button onClick={handleTag}>Tag Fields</button>
        {/* <button onClick={handleTransaction}>Transaction Fields</button> */}
        <button>Custom Fileds</button>
        <button>Activity Rules</button></legend>

    <div>
    {dataproperties && arr5.map((elem) => {
        return (
        <ul key={elem.id}>
        <input type="checkbox"/>
        <label >{elem}</label>
        </ul>
    )
    })}
    {datatag && 
        <div>
         <h3>Standard</h3>
        </div>
    }
    </div>
</fieldset>

       
        <div>
           
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </>
  );
}

export default EditJob;
