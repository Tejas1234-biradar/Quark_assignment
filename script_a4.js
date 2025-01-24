$(document).ready(function () { //jquery main function
    $("#update-member-form").on("submit", function (event) {
        event.preventDefault();

        // Get input values
        const designation = $('#designation').val();//jquery for Get element by id
        const name = $('#name').val();
        const contact = $('#contact').val();
        const rowIndex = parseInt($('#row-index').val(), 10);//parse int to take rows as numbers instead of strings
        const sucess= $('#')
        const table = $('#team-table').get(0).getElementsByTagName("tbody")[0];//creation of table

        if (!table) {
            alert("Table not found.");//if for table not found.
            return;
        }

        if (rowIndex) {
            // Update existing row
            const row = table.rows[rowIndex - 1]; // Convert to 0-based index
            if (row) {
                row.cells[0].textContent = designation;
                row.cells[1].textContent = name;
                row.cells[2].textContent = contact;
            } else {
                alert("Row number is invalid.");//error handling
            }
        } else {
            // Add new row
            const newRow = table.insertRow();
            newRow.innerHTML = `
                <td>${designation}</td>
                <td>${name}</td>
                <td>${contact}</td>
            `;
        }

        // Clear the form
        document.getElementById('update-member-form').reset();
    });
});
