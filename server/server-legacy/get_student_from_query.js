//Function to be called to get student by email
function get_student_from_email_query(){
    const email = document.getElementById('emailInput').value;

    const request = {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        params: JSON.stringify({
            email: email,
        })
    }

    //Sends Get Request to Express Server
    fetch('/api/find-student-by-email',request);
}