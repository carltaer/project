
const dateHtml = document.getElementById("time")


 fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=landscape")
 .then(res => res.json())
 .then(data => {
     document.body.style.backgroundImage = `url(${data.urls.full})`
     document.getElementById("author").textContent = `By: ${data.user.name}`
 })
 .catch(err =>{
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1505896202-4fe971e982fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2NTkwMDc&ixlib=rb-1.2.1&q=80&w=1080)`
    document.getElementById("author").textContent = `By: Ruth Troughton `
 })

 fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
      if (!res.ok) {
         throw Error("Something went wrong!")
      }
      return res.json()
    })
    .then( data => {
         document.getElementById("crypto-top").innerHTML = `<img src="${data.image.small} alt="${data.name}">
                                                        <span>${data.name}</span>`
         document.getElementById("crypto").innerHTML += `
                                                         <p>🎯:£${data.market_data.current_price.gbp}</p>
                                                         <p>👆:£${data.market_data.high_24h.gbp}</p>
                                                         <p>👇:£${data.market_data.low_24h.gbp}</p>
                                                         `
                                                      })
    .catch(err => console.error(err))

function getTime(){
var time = new Date();
dateHtml.textContent = time.toLocaleTimeString("us-en", {timeStyle:"medium"})
}

setInterval(getTime, 1000)

navigator.geolocation.getCurrentPosition(position =>{
   fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
      .then(res => {
         if(!res.ok){
            throw Error("Weather data is not available!")
         }
         return res.json()
      })
      .then(data => {
         const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
         const temp = Math.round(data.main.temp)
         document.getElementById("weather").innerHTML =  `
                                                         <img src="${iconUrl}" alt="${data.weather[0].description}"/>
                                                         <p class="weather-temp">${temp}º</p>
                                                         <p class="weather-city">${data.name}</p>
                                                         `
      })
      .catch(err => console.error(err))
})



fetch("https://type.fit/api/quotes")
   .then(res => {
      if(!res.ok){
         throw Error("Quotes data is not available!")
      }
      return res.json()
   })
   .then(data => {
      const randomQuotes = Math.floor(Math.random() * data.length)
      document.getElementById("quotesDiv").innerHTML = `
                                                         <p id="quotes">"${data[randomQuotes].text}"</p>
                                                         <small id="quotes-author">${data[randomQuotes].author}</small>
                                                       `
   })
   .catch(err => console.error(err))