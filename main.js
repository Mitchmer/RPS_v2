

$(document).ready( function() {

  function userInput(user) {
    var user = this.id
    console.log(user)
    comp = compInput()
    console.log(comp)
    comparison(user, comp)
  }

  function compInput() {
    var compoptions = ['rock', 'paper', 'scissors']
    var compchoice = Math.floor(Math.random() * compoptions.length)
    return compoptions[compchoice]
}

  function comparison(user, comp) {
    if (user === comp) {
      $('#result-message').text('TIE')
      console.log('tie')
    }
    else if ((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')) {
      $('#result-message').text('VICTORY ACHIEVED')  
      console.log('yay')
    }
    else {
      $('#result-message').text('YOU DIED')
      console.log('ded')
    }
  }


$('.choice').on('click', userInput)

})
