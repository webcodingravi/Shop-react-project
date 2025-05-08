import {BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from './Components/Admin/Admin'
import 'remixicon/fonts/remixicon.css'
 const App = () => {
  return (
     <>
      <BrowserRouter>
       <Routes>
        <Route path="/admin"  element={<Admin/>}/>
       </Routes>
      </BrowserRouter>
     </>
  )

 }

 export default App;
