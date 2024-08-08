
fetch(navbar)
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;

    document.getElementById('about').setAttribute('href', about);
    document.getElementById('contact').setAttribute('href', contact);
    document.getElementById('home').setAttribute('href', home);

    });
