const searchButton = document.getElementById('search-button');

searchButton.onclick() = () =>{
    const lastName = document.getElementById('lastNameInput').value;


    const request = {
        method: 'GET',
        headers: {'Content-Type':'application/json'},

        params: JSON.stringify({
            lastName : lastName,
        })
    }
    
    fetch('/api/search-students');

}