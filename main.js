

$(document).ready( function() {

  function userInput(user) {
    var user = this.id
    console.log(user)
    comp = compInput()
    console.log(comp)
  }

  function compInput() {
    var compoptions = ['rock', 'paper', 'scissors']
    var compchoice = Math.floor(Math.random() * compoptions.length)
    return compoptions[compchoice]
}

  function comparison() {
    if (user === comp)
      



  }

  function result() {

  }

$('.choice').on('click', userInput)

})
