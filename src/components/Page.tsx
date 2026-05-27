import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./form/form";
import type { Department } from "./types";

interface Props {
	departments: Department[];
	setDepartments: (departments: Department[]) => void;
}

export default function Page({ departments, setDepartments }: Props) {
	return (
		<>
			<Header />
			<Main departments={departments} />
			<Form departments={departments} setDepartments={setDepartments} />
			<Footer />
		</>
	);
}