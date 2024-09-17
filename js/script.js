function openLink(link) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        link = 'http://' + link;
    }
    window.open(link, '_blank');
}

document.getElementById('home-tab').addEventListener('click', function() {
        window.location.href = '/index.html';
    }); 
document.getElementById('submit-tourney-tab').addEventListener('click', function() {
        window.location.href = '/submit_tourney.html';
    });
document.getElementById('contact-tab').addEventListener('click', function() {
        window.location.href = '/contact.html';
    });    
    

