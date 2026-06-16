import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/layout/Page";
import Employees from "./components/employees/EmployeeSection";
import Organization from "./components/organization/OrganizationSection";
import type { Department, Role } from "./data/types";
import * as EmployeeService from "./services/employeeService";
import * as RoleService from "./services/roleService";
import "./App.css";

function App() {
    const [departments, setDepartments] = useState<Department[]>(EmployeeService.getDepartments());
    const [roles, setRoles] = useState<Role[]>(RoleService.getRoles());

    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/" element = {< Page />}>
            <Route index element = {< Navigate to = "/employees" />} />
                < Route path = "employees" element = {< Employees departments = { departments } setDepartments = { setDepartments } />} />
                    < Route path = "organization" element = {< Organization roles = { roles } setRoles = { setRoles } />} />
                        </Route>
                        </Routes>
                        </BrowserRouter>
  );
}

export default App;