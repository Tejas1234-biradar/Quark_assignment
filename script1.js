document.getElementById('committee-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const branch = document.getElementById('branch').value;
    
    
    const committeeMember = {
        name: name,
        position: position,
        branch: branch
    };
    validation(name);
    validation(position);
    validation(branch);
    function containsDigits(str) {
        const regex = /\d/;  // Regular expression to check for digits
        return regex.test(str);  // Returns true if the string contains digits
      }
      
      
    async function validation(str) {
        if (containsDigits(str)) {
            alert("Please put only Letters in name")
        }
    }

    
    let committeeMembers = JSON.parse(localStorage.getItem('committeeMembers')) || [];

    
    committeeMembers.push(committeeMember);

   
    localStorage.setItem('committeeMembers', JSON.stringify(committeeMembers));

   
    alert('Data stored successfully!');

   
    document.getElementById('committee-form').reset();
});

