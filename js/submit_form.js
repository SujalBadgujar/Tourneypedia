document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tournamentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        var formData = new FormData(this);

        // Send form data to the server using Fetch API
        fetch('submit_tourney.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerHTML = data; // Display response message
            document.getElementById('tournamentForm').reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').innerHTML = '<p>Failed to submit tournament. Please try again later.</p>'; // Display error message
        });
    });
});

        document.getElementById('tournamentForm').addEventListener('submit', function(event) {
            event.preventDefault();


            document.getElementById('successMessage').style.display = 'block';

            this.reset();
        });