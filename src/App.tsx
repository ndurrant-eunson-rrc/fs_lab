import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/layout/Page";
import Employees from "./components/employees/EmployeeSection";
import Organization from "./components/organization/OrganizationSection";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/" element = {< Page />}>
            <Route index element = {< Navigate to = "/employees" />} />
                < Route path = "employees" element = {< Employees />} />
                    < Route path = "organization" element = {< Organization />} />
                        </Route>
                        </Routes>
                        </BrowserRouter>
  );
}

export default App;