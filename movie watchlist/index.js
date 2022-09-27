const searchInputHtml = document.getElementById("search-input")
const searchBtnHtml = document.getElementById("search-button")
const displayMoviesHtml = document.getElementById("display-movies")
let watchlist = []
localStorage.setItem('watchlist', JSON.stringify(watchlist))

searchBtnHtml.addEventListener("click", displayMovies)

async function getMovies(){
    const res = await fetch(`https://www.omdbapi.com/?apikey=5da704c2&s=${searchInputHtml.value}`)
    const data = await res.json()
    return data
}

function displayMovies(e){
    e.preventDefault()
    getMovies().then(async movieObject => {
        if (movieObject.Response === "True"){
            let moviesHtml= ""
            for(let movie of movieObject.Search){
                const res = await fetch(`https://www.omdbapi.com/?apikey=5da704c2&i=${movie.imdbID}`)
                const data = await res.json()
                const {Poster, Title, imdbRating, Runtime, Genre, Plot} = data
                const position = movieObject.Search.indexOf(movie)
                moviesHtml += `
                    <div id=${movie.imdbID}>
                        <div class="display-movies">
                            <img class="movie--image" src=${Poster} />
                            <div class="movie--body">
                                 <div class="movie--title">
                                     <p class="movie--title-text">${Title}</p>
                                     <img class="movie--title-icon" src="./images/star-icon.png"/>
                                     <p class="movie--rating">${imdbRating}</p>
                                 </div>
                                <div class="movie--info">
                                     <p class="movie--duration">${Runtime}</p>
                                     <p class="movie--genre">${Genre}</p>
                                 <div class="movie--add-to-watchlist row" id="add-to-watchlist" onClick="addToWatchlist(${movie.imdbID})">
                                    <img class="movie--add-icon" src="./images/add-icon.png" />
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
        }else {
            displayMoviesHtml.innerHTML = `
            <div class="empty">
                <p class="empty--text">The movie you searched is not available.</p>
            </div>`
        } 
    })
}

function addToWatchlist(id){
    const movieId = id.getAttribute('id')
    watchlist = JSON.parse(localStorage.getItem('watchlist'))
    watchlist.push(movieId)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
}