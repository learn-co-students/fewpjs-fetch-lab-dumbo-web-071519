function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
        .then(response => response.json())
        .then(json => renderBooks(json))
}

function getPosts(anything) {
    renderBooks(anything);
}

function renderBooks(json) {
    const main = document.querySelector('main');
    json.forEach(bookele => {
        const header = document.createElement('h2');
        header.innerText = bookele.name;
        main.appendChild(header);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
})