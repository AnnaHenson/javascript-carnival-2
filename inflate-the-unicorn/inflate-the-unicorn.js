  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
document.getElementById("unicorn1").onclick = pictureClick;

function  pictureClick(event){
  if (unicorn1Counter >= 3)
  {
    alert("Unicorn x says thank you")
    return
  }
  unicorn1Counter++;
  document.getElementById("unicorn1").src = unicorn[unicorn1Counter]
  unicorn2Counter++;
  document.getElementById("unicorn2").src = unicorn[unicorn2Counter]
  unicorn3Counter++;
  document.getElementById("unicorn3").src = unicorn[unicorn3Counter]
       
  console.log("clicked")

}
var unicorn =[]
unicorn[0] = "./images/unicorn-0.png";
unicorn[1] = "./images/unicorn-1.png";
unicorn[2] = "./images/unicorn-2.png";
unicorn[3] = "./images/unicorn-3.png";

var unicorn1Counter=0

var unicorn2Counter=0

var unicorn3Counter=0


