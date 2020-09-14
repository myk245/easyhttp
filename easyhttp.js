function easyHTTP() {
   this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
   this.http.open('GET', url, true);

   this.http.onload = () => {
      if (this.http.status === 200) {
         callback(null, this.http.responseText);
      } else {
         callback('Error:' + this.http.status);
      }
   }
    
   this.http.send(); 
}

// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request