const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(error => console.log(error))

// User Data
const data = {
   name: 'Cindy Kei', 
   username: 'cindykei', 
   email: 'ck123@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//    .then(data => console.log(data))
//    .catch(error => console.log(error))

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//    .then(data => console.log(data))
//    .catch(error => console.log(error))

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
   .then(data => console.log(data))
   .catch(error => console.log(error))