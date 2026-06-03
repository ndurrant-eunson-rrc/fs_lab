import { useState } from "react";
import Page from "./components/layout/Page";
import type { Department } from "./data/types";
import initialDepartments from "./data/department-data";
import "./App.css";
 
function App() {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);
 
  return (
    <Page departments={departments} setDepartments={setDepartments} />
  );
}
 
export default App;
 