import { useEmployeeForm } from "../../hooks/useEmployeeForm";
import "./form.css";

interface Props {
	employeeForm: ReturnType<typeof useEmployeeForm>;
}

export default function Form({ employeeForm }: Props) {
	const { firstName, lastName, department, departments, handleSubmit } = employeeForm;

	return (
		<section className= "form-section" >
		<h2>Add New Employee </h2>
			< form onSubmit = { handleSubmit } >
				<div className="form-group" >
					<label htmlFor="firstName" > First Name </label>
						< input id = "firstName" type = "text" value = { firstName.value } onChange = { firstName.onChange } />
							{ firstName.message && <p className="error"> { firstName.message } </p> }
							</div>
							< div className = "form-group" >
								<label htmlFor="lastName" > Last Name(optional) </label>
									< input id = "lastName" type = "text" value = { lastName.value } onChange = { lastName.onChange } />
										</div>
										< div className = "form-group" >
											<label htmlFor="department" > Department </label>
												< select id = "department" value = { department.value } onChange = { department.onChange } >
													<option value="" > Select a Department </option>
	{
		departments.map((dept, index) => (
			<option key= { index } value = { dept.name } > { dept.name } </option>
		))
	}
	</select>
	{ department.message && <p className="error" > { department.message } </p> }
	</div>
		< button type = "submit" > Add Employee </button>
			</form>
			</section>
  );
}