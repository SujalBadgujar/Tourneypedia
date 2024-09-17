document.addEventListener('DOMContentLoaded', () => {
    activateTab('bgmi-tab', 'bgmi-subtabs');
    activateSubTab('bgmi-tournaments-tab');

    document.getElementById('bgmi-tab').addEventListener('click', () => {
        activateTab('bgmi-tab', 'bgmi-subtabs');
        activateSubTab('bgmi-tournaments-tab');
    });
    document.getElementById('freefire-tab').addEventListener('click', () => {
        activateTab('freefire-tab', 'freefire-subtabs');
        activateSubTab('freefire-tournaments-tab');
    });

    document.getElementById('bgmi-tournaments-tab').addEventListener('click', handleSubTabClick);
    document.getElementById('bgmi-scrims-tab').addEventListener('click', handleSubTabClick);
    document.getElementById('freefire-tournaments-tab').addEventListener('click', handleSubTabClick);

    function activateTab(tabId, subtabsId) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.sub-tabs > div').forEach(subtab => subtab.style.display = 'none');
        document.getElementById(tabId).classList.add('active');
        document.getElementById(subtabsId).style.display = 'flex';
    }

    function activateSubTab(subTabId) {
        document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
        document.getElementById(subTabId).classList.add('active');
        handleSubTabClick({ target: document.getElementById(subTabId) });
    }

    async function handleSubTabClick(event) {
        document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        let endpoint;
        let isScrims = false;

        if (event.target.id === 'bgmi-tournaments-tab') {
            endpoint = 'fetch_tournaments.php';
        } else if (event.target.id === 'bgmi-scrims-tab') {
            endpoint = 'fetch_scrims.php';
            isScrims = true;
        } else if (event.target.id === 'freefire-tournaments-tab') {
            endpoint = 'fetch_freefire_tournaments.php';
        }

        const data = await fetchData(endpoint);
        renderData(data, isScrims);
    }
});

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to render data
async function renderData(data, isScrims = false) {
    const tournamentContainer = document.querySelector('.tournament');
    tournamentContainer.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        if (isScrims) {
            card.innerHTML = `<div class="card-text">
                <h2>${item.title}</h2>
                <p>Organiser: ${item.organizer}</p>
            </div>`;
        } else {
            card.innerHTML = `<div class="card-text">
                <h2>${item.title}</h2>
                <div>
                    <img src="${item.image}" alt="Thumbnail" class="thumbnail">
                </div>
                <p>Organiser: ${item.organizer}</p>
                <p>Prize Pool: <b>₹${item.prize_pool}</b></p>
                <p>Entry: ${item.entry_fee}</p>
                <a class="visit" href="#" onclick="openLink('${item.link}')">Register</a>
                ${item.featured == 1 ? '<p class="featured">Featured</p>' : ''}
            </div>`;
        }
        
        tournamentContainer.appendChild(card);
    });
}
