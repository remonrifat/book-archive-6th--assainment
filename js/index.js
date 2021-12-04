const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}
    `;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}



const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card  h-100 ">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Book Name:${book.title}</h4>
                    <h5 class="card-title">Author Name:${book.author_name}</h5>
                    <p class="card-text">published date:${book.first_publish_year}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })

}