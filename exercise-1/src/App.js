import React from "react";
import "./App.css";
import NamePerson from "./NamePerson";            
import PeopleTable from "./PeopleTable";          
import FirstTeenager from "./FirstTeenager";      
import AreAllTeenagers from "./AreAllTeenagers";  
import SortedPeople from "./SortedPeople";        
import OldestAndYoungest from "./OldestAndYoungest";  
import AverageAgeByOccupation from "./AverageAgeByOccupation"; // import mới

function App() {
  return (
    <div>
      <h1 className="h1Style">Hello world!</h1>
      <NamePerson />         
      <PeopleTable />        
      <FirstTeenager />      
      <AreAllTeenagers />    
      <SortedPeople />       
      <OldestAndYoungest />  
      <AverageAgeByOccupation /> {/* Bài 10 */}
    </div>
  );
}

export default App;