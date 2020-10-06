// EasyHTTP Library
// Library for making HTTP requests

// @version 2.0.0
// @author Cindy Kei
// @license MIT

class EasyHTTP {
   // Make an HTTP GET request
   get(url) {
      return new Promise((resolve, reject) => {
         fetch(url)
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
      })
   }

   // Make an HTTP POST request
   post(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
         })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
      })
   }

   // Make an HTTP PUT request
   put(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
      })
   }

   // Make an HTTP DELETE request
   delete(url) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'DELETE', 
            headers: {
               'Content-type': 'application/json'
            }
         })
            .then(resp => resp.json())
            .then( () => resolve('User deleted...'))
            .catch(error => reject(error))   
      })
   }
}