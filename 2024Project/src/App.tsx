import CreateListing from "./assets/Components/CreateListing"
import { Route, Routes } from "react-router-dom";

function App() {
 return (
  <div className='App'>
    <Routes>
      <Route path="/create-listing" element={CreateListing}/>
    </Routes>
  </div>
 )

 

}

export default App
