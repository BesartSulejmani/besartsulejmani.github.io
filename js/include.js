function loadHTML(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Load the components into their respective placeholders
loadHTML('header', 'components/header.html');
loadHTML('persona-summary', 'components/persona-summary.html');
loadHTML('opleiding', 'components/opleiding.html');
loadHTML('werkervaring', 'components/werkervaring.html');
loadHTML('footer', 'components/footer.html');