document.addEventListener("DOMContentLoaded", () => {

    // Script for the current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Injects the employee list into main
    const main = document.getElementById("main");
    main.innerHTML = "";

    departments.forEach((department) => {
        const section = document.createElement("section");

        const heading = document.createElement("h2");
        heading.textContent = department.name;
        section.appendChild(heading);

        const ul = document.createElement("ul");

        department.employees.forEach((employee) => {
            const li = document.createElement("li");
            li.textContent = employee.lastName
                ? `${employee.firstName} ${employee.lastName}`
                : employee.firstName;
            ul.appendChild(li);
        });

        section.appendChild(ul);
        main.appendChild(section);
    });

});