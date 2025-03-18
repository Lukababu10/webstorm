document.getElementById('searchButton').addEventListener('click', searchMovies);
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});
async function searchMovies() {
    const query = document.getElementById('search').value.trim();
    if (query === '') {
        alert('Please enter a movie name!');
        return;
    }
    const apiKey = 'YOUR_API_KEY';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const moviesContainer = document.getElementById('movies');
        moviesContainer.innerHTML = '';
        if (data.Response === 'True') {
            data.Search.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                `;
                moviesContainer.appendChild(movieCard);
            });
        } else {
            moviesContainer.innerHTML = '<p>No movies found.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
