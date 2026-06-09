import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/layout/Page";
import Employees from "./components/employees/EmployeeSection";
import Organization from "./components/organization/OrganizationSection";
import type { Department } from "./data/types";
import * as employeeRepo from "./apis/employeeRepo";
import "./App.css";
 
function App() {
  const [departments, setDepartments] = useState<Department[]>(employeeRepo.getDepartments());
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Navigate to="/employees" />} />
          <Route path="employees" element={<Employees departments={departments} setDepartments={setDepartments} />} />
          <Route path="organization" element={<Organization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;