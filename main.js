// Buy a big lump of clay
// Use a pottery wheel to turn the clay into a bowl
// Put the bowl into a kiln for a bisque firing
// Apply glaze to bowl
// Put glazed bowl in kiln for final firing
// 💰💰💰 (haha, yeah right)

const buyClay = () => {
  clayObj = {}
  return clayObj
}

const makePottery = (clayObj) => {
  clayObj.shape = "bowl"
  return clayObj
}

const bisqueFiring = (clayObj) => {
  clayObj.readyForGlazing = true
  return clayObj
}

const glazePottery = (clayObj) => {
  if (clayObj.readyForGlazing = true) {
    clayObj.glazing = "midnight blue"
    return clayObj
  }
  else {
    console.log("make sure you bisuqe fire the pottery before you glaze it.")
  }
}

const finalFiring = (clayObj, temp) => {
  if (temp > 1200) {
    clayObj.cracked = true
    return clayObj
  }
  else {
    clayObj.cracked = false
    return clayObj
  }
} 

const potterBot = (getFiery) => { 
  getFiery = buyClay()
  makePottery(potterBot)
  bisqueFiring(potterBot)
  glazePottery(potterBot)
  finalFiring(potterBot, 1200)
  console.log(potterBot)
}

potterBot()
potterBot()
potterBot()