const request = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    params: JSON.stringify({
        userPassword: "3pN23z3h",
        userEmail: "janedoe@gmail.com"
    }),
};

console.log(fetch('http://localhost:5000/api/is-valid-student', request));