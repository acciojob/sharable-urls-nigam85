// your code here
 document.getElementById('urlForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            const queryString = `?name=${encodeURIComponent(name)}&year=${year}`;
            const url = `https://localhost:8080/${queryString}`;

            document.getElementById('url').textContent = url;
        });

