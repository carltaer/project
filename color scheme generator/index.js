const btn = document.getElementById("btn")
let hex1 = document.getElementById("hex1")
let hex2 = document.getElementById("hex2")
let hex3 = document.getElementById("hex3")
let hex4 = document.getElementById("hex4")
let hex5 = document.getElementById("hex5")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const colorSeed = document.getElementById("seed-color").value   
    const modeSelect = document.getElementById("color-select").value
    let colorHex = colorSeed.slice(1)

fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${modeSelect}`)
    .then(res => res.json())
    .then(data => {
        
        document.getElementById("color1").style.backgroundColor = data.colors[0].hex.value
        document.getElementById("color2").style.backgroundColor = data.colors[1].hex.value
        document.getElementById("color3").style.backgroundColor = data.colors[2].hex.value
        document.getElementById("color4").style.backgroundColor = data.colors[3].hex.value
        document.getElementById("color5").style.backgroundColor = data.colors[4].hex.value

        hex1.textContent = data.colors[0].hex.value
        hex2.textContent = data.colors[1].hex.value
        hex3.textContent = data.colors[2].hex.value
        hex4.textContent = data.colors[3].hex.value
        hex5.textContent = data.colors[4].hex.value

        
        
        hex1.addEventListener("click",()=>{
            navigator.clipboard.writeText(hex1.textContent)
            alert(`${hex1.textContent} has been copied to the clipboard`)
        })

        hex2.addEventListener("click",()=>{
            navigator.clipboard.writeText(hex2.textContent)
            alert(`${hex2.textContent} has been copied to the clipboard`)
        })

        hex3.addEventListener("click",()=>{
            navigator.clipboard.writeText(hex3.textContent)
            alert(`${hex3.textContent} has been copied to the clipboard`)
        })

        hex4.addEventListener("click",()=>{
            navigator.clipboard.writeText(hex4.textContent)
            alert(`${hex4.textContent} has been copied to the clipboard`)
        })

        hex5.addEventListener("click",()=>{
            navigator.clipboard.writeText(hex5.textContent)
            alert(`${hex5.textContent} has been copied to the clipboard`) 
        })
        
    
    })
})


