const searchInput = document.getElementById("search-input");
const luckyButton = document.getElementById("lucky-button");

function searchGoogle() {
    const query = searchInput.value.trim();
    if (!query) {
    return;
     }
    const encodedQuery = encodeURIComponent(query);

    const url = `https://google.com/search?q=${encodedQuery}`;

    window.location.href = url;
}

function feelingLucky() {
    const query = searchInput.value.trim();
    if (!query) {
    return;
     }
    const encodedQuery = encodeURIComponent(query);

    const url = `https://google.com/search?q=${encodedQuery}&btnI=1`;

    window.location.href = url;
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchGoogle);
luckyButton.addEventListener("click", feelingLucky);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchGoogle();
    }
});