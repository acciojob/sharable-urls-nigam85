// // your code here
//  document.getElementById('urlForm').addEventListener('submit', function (e) {
//             e.preventDefault();

//             const name = document.getElementById('name').value;
//             const year = document.getElementById('year').value;

//             const queryString = `?name=${encodeURIComponent(name)}&year=${year}`;
//             const url = `https://localhost:8080/${queryString}`;

//             document.getElementById('url').textContent = url;
//         });

 function generateURL() {
      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;
      const baseUrl = "https://localhost:8080/";
      
      // Create a query string with the provided values
      let queryString = "?";
      if (name) {
        queryString += "name=" + encodeURIComponent(name);
      }
      if (year) {
        if (name) {
          queryString += "&";
        }
        queryString += "year=" + year;
      }
      
      // Update the h3 element with the generated URL
      document.getElementById('url').textContent = baseUrl + queryString;
    }