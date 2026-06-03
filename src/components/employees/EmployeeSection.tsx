import type { Department } from "../../data/types";
import Main from "./Main";
import Form from "../forms/Form";
 
interface Props {
  departments: Department[];
  setDepartments: (departments: Department[]) => void;
}
 
export default function Employees({ departments, setDepartments }: Props) {
  return (
    <>
      <Main departments={departments} />
      <Form departments={departments} setDepartments={setDepartments} />
    </>
  );
}
 