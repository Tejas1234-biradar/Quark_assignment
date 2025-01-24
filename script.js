document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const branch = document.getElementById('branch').value;


    const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

   
    const newRow = tableBody.insertRow();

   
    const seniorNumberCell = newRow.insertCell(0);
    const branchCell = newRow.insertCell(1);
    const nameCell = newRow.insertCell(2);
    const positionCell = newRow.insertCell(3);

    
    seniorNumberCell.textContent = tableBody.rows.length; 
    branchCell.textContent = branch;
    nameCell.textContent = name;
    positionCell.textContent = position;

   
    document.getElementById('user-form').reset();
});
