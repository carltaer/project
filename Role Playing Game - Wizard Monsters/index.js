
import characterData from "./data.js"
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false

function getNewMonster(){
  const nextMonsterData = characterData[monstersArray.shift()] 
  return nextMonsterData ? new Character(nextMonsterData) : {}
}

const characterHero = new Character(characterData.hero)
let monster = getNewMonster()

function attack(){
   if(!isWaiting){
      characterHero.getDiceHtml()
      monster.getDiceHtml()
      characterHero.takeDamage(monster.currentDiceScore)
      monster.takeDamage(characterHero.currentDiceScore)
      render()
      
      if(characterHero.dead){
         endGame()
      }else if(monster.dead){
         isWaiting = true
         if(monstersArray.length > 0){
            setTimeout(()=> {
            monster = getNewMonster()
            render()
            isWaiting = false   
         }
            , 1500)
         }
         else{
          setTimeout(() => endGame(), 1500)
         }
      }
   
   }
   }
  

function endGame(){
   isWaiting = true
   const endMessage = characterHero.health === 0 && monster.health === 0 ? "No victors - all characters are dead" : 
   characterHero.health > 0 ? "The wizard wins" :
   `The monster wins`

   const endEmoji = characterHero.health > 0 ? "🔮" : "☠️"
   
   document.body.innerHTML = `<div class="end-game">
   <h2>Game Over</h2>
   <h3>${endMessage}</h3>
   <p class="end-emoji">${endEmoji}</p>
   </div>` 
}

function render(){
   document.getElementById("hero").innerHTML = characterHero.getCharacterHtml()
   document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

document.getElementById("attack-button").addEventListener("click",attack)
render()

