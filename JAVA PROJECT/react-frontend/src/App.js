import React from 'react'
import EmployeeListComponent from './components/EmployeeListComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
        
        <BrowserRouter>
        
        <div className="container">
            <Routes>
              <Route exact path="/" element={<EmployeeListComponent/>}></Route>
              <Route path="/employees" element={<EmployeeListComponent/>}></Route>
              <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
              <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            </Routes>
        </div>

        </BrowserRouter>

        <FooterComponent/>
    </div>
  )
}

export default App