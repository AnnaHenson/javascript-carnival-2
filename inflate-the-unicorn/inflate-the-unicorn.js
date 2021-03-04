  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
document.getElementById("unicorn1").onclick = pictureClick;
document.getElementById("unicorn2").onclick = pictureClick;
document.getElementById("unicorn3").onclick = pictureClick;


function  pictureClick(event){
  /*if (unicorn1Counter >= 3)
  {
    alert("Unicorn x says thank you")
    return
  }*/
  var target = event.target;

  if(target.id == "unicorn1"){
    if (unicorn1Counter >= 3)
    {
      alert("Unicorn 1 says thank you")
    
    }
    unicorn1Counter++

    if(unicorn1Counter == 4)
       unicorn1Counter = 0

    target.src = unicorn[unicorn1Counter]
  }

  if(target.id == "unicorn2") {
      if (unicorn2Counter >=3)
      {
        alert("unicorn 2 says thankyou")

      }unicorn2Counter++

    if(unicorn2Counter == 4)
       unicorn2Counter = 0

    target.src = unicorn[unicorn2Counter]

  }

  if(target.id == "unicorn3") {
    if(unicorn3Counter >=3)
    {
      alert("unicorn 3 says thankyou")
    }
     unicorn3Counter++

    if(unicorn3Counter == 4)
        unicorn3Counter = 0
    

    target.src = unicorn[unicorn3Counter]

  }


}
var unicorn =[]
unicorn[0] = "./images/unicorn-0.png";
unicorn[1] = "./images/unicorn-1.png";
unicorn[2] = "./images/unicorn-2.png";
unicorn[3] = "./images/unicorn-3.png";

var inflation = [0,0,0]


var unicorn1Counter=0

var unicorn2Counter=0

var unicorn3Counter=0


