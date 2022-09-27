const displayMoviesHtml = document.getElementById("display-movies")

function removeMovies(id){
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    const movieId = watchlist.indexOf(id)
    const removed = watchlist.splice(movieId, 1)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    displayMovies()
}   

async function displayMovies(){
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    if(watchlist.length > 0) {
        let moviesHtml =  ''
        for(let movie of watchlist) {
            const res = await fetch(`https://www.omdbapi.com/?apikey=5da704c2&i=${movie}`)
            const data = await res.json()
                const {Poster, Title, imdbRating, Runtime, Genre, Plot} = data
                moviesHtml += `
                    <div id=${movie.imdbID}>
                        <div class="display-movies">
                            <img class="movie--image" src=${Poster} />
                            <div class="movie--body">
                                <div class="movie--title">
                                    <p class="movie--title-text">${Title}</p>
                                    <img class="movie--title-icon" src="./images/star-icon.png" />
                                    <p class="movie--rating">${imdbRating}</p>
                                </div>
                                <div class="movie--info">
                                    <p class="movie--duration">${Runtime}</p>
                                    <p class="movie--genre">${Genre}</p>
                                    <div class="movie--add-to-watchlist row" id="add-to-watchlist" onClick="removeMovies('${movie}')">
                                        <img class="movie--add-icon" src="./images/remove-icon.png" />
                                        <p class="movie--add-text">Watchlist</p>
                                    </div>
                                    </div>    
                                        <p class="movie--about">${Plot}</p>
                                </div>
                            </div>
                            <hr />
                        </div>`
            }
            displayMoviesHtml.innerHTML = moviesHtml
        }else{
            displayMoviesHtml.innerHTML = `
                    <div class="empty">
                        <p class="empty--text">Your watchlist is looking a little empty...</p>
                        <a class="empty--link" href"./index.html"><img src="./images/add-icon.png" />Let's add some movies!</a>
                    </div>`
        }
    }

    displayMovies()