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

// Create Post
http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(error => console.log(error))