import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
	return (
		<nav>
			<NavLink to="/employees">Employees</NavLink>
			<NavLink to="/organization">Organization</NavLink>
		</nav>
	);
}