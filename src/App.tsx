import Page from "./components/Page";
import departments from "./components/department-data";
import "./App.css";

function App() {
	return (
		<Page departments={departments} />
	);
}

export default App;