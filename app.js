document.addEventListener("DOMContentLoaded", () => {

    // Script for the current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Injects the employee list into main
    const main = document.getElementById("main");
    main.innerHTML = "";

    // Gets the department and employee data from data.js
    departments.forEach((department) => {
        const section = document.createElement("section");

        // Creates the heading for the departments
        const heading = document.createElement("h2");
        heading.textContent = department.name;
        section.appendChild(heading);

        // Creates the list of employees for each department
        const ul = document.createElement("ul");
        
        // Iterates through the employees in each department and creates
        // a list item for each employee, then appends it to the unordered list
        department.employees.forEach((employee) => {
            const li = document.createElement("li");
            li.textContent = `${employee.firstName} ${employee.lastName}`;
            ul.appendChild(li);
        });

        // Appends the list of employees to section and then appends section to main
        section.appendChild(ul);
        main.appendChild(section);
    });

});