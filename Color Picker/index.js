// https://apis.scrimba.com/hexcolors/

const count = 100;

function displayColors(colors){

    let myColors = colors.map(color => {
        return `<div class="my-color" style="background-color:${color.value}"></div>`
    }).join("")
    document.body.innerHTML =  `<div class="my-colors">
                                    ${myColors}
                                </div>`
}

async function getColors(count){
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${count}`)
    let data = await response.json()

    let colors = data.colors
    displayColors(colors)
}
getColors(count)