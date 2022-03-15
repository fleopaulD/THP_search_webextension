let submitButton = document.querySelector('#submit')
let searchInput = document.querySelector('#query')
let queryNotif = document.querySelector('.query-notif');
let ul = document.querySelector('ul');


searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        submitButton.click();
    }
});

submitButton.addEventListener('click', async function() {
    let data = { "query": searchInput.value, "token": "lHpsxA23A20mYNaoIBYDtfuTC2DJ7Kx1WKJeHZjmKzHwedJrd8Qjk1kQ476xCZ4M" }
    let url = "https://thp-search.herokuapp.com/search"

    queryNotif.innerHTML = "Recherche en cours...";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
    });

    if (response.status != 200) {
        queryNotif.innerHTML = `[${response.status}] Erreur connexion API`;
        return;
    };

    let shows = await response.json();
    console.log(response.status);
    let html = '';
    let nbShows = shows.results.length;

    if (nbShows > 0) {
        shows.results.forEach(result => {
            html += `<li><a href="${result.url}">${result.title}</a></li>`;
        });
        queryNotif.innerHTML = `${nbShows} résultat${nbShows > 1 ? 's' : ''} pour "${shows.query}"`;
        ul.innerHTML = html;
    }
    else {
        queryNotif.innerHTML = `Aucun résultat pour "${shows.query}"`;
        ul.innerHTML = "";
    }
});
