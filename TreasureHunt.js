var bombLocation = Math.floor(Math.random() * 9)
var treasureLocation = Math.floor(Math.random() * 9)

const treasureFinder = (id) => {
  if(id === treasureLocation) {
    document.getElementById(id). innerHTML ="💰"
  } else if(id === bombLocation) {
    document.getElementById(id). innerHTML ="💣"
  } else {
    document.getElementById(id). innerHTML ="🏴‍☠️"
}
}