  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Randomly selecdft a cell//
// make a mole appear//
// Click on a mole//
// Mole appears in another cell//
// Play the audio for the mole which appears//

var cells = document.getElementsByTagName ("TD");

var randomIndex = Math.floor (Math .random() * cells.length); 

var randomCell = cells [randomIndex] 

var mole = document.createElement("img"); 

mole.src = "./mole.png" ;
mole.id = "mole"

randomCell.appendChild(mole);

mole.onClick = hitMole

function hitMole() {
  randomIndex = Math.floor (Math .random() * cells.length);
  randomCell = cells.[randomIndex]
  randomCell.appendChild(mole);

  var audio = new Audio ('./whack-audio.wav');
  audio.play();
}

console.log("Whack-a-Mole!")