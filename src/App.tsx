import { useState } from "react";
import Page from "./components/Page";
import type { Department } from "./components/types";
import initialDepartments from "./components/department-data";
import "./App.css";
 
function App() {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);
 
  return (
    <Page departments={departments} setDepartments={setDepartments} />
  );
}
 
export default App;
 