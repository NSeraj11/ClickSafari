var numberofAnimals = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberofAnimals; i++) {

  document.querySelectorAll(".animal")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML.toLowerCase();

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}



document.addEventListener("keypress",function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "lion":
      var lion = new Audio("lion.mp3");
      lion.play();
      break;

    case "eagle":
      var eagle = new Audio("eagle.mp3");
      eagle.play();
      break;

    case "wolf":
      var wolf = new Audio("wolf.mp3");
      wolf.play();
      break;

    case "chicken":
      var chicken = new Audio("chicken.mp3");
      chicken.play();
      break;

    case "cheetah":
      var cheetah = new Audio("cheetah2.mp3");
      cheetah.play();
      break;

    case "mockingbird":
      var mockingbird = new Audio("mockingbird.mp3");
      mockingbird.play();
      break;

    case "giraffe":
      var giraffe = new Audio("giraffe.mp3");
      giraffe.play();
      break;

    case "elephant":
      var elephant = new Audio("elephant.mp3");
      elephant.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
