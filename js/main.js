// BURGER MENU
var myBurger = document.querySelector(".burger");
var myNav = document.querySelector("nav");
var myLinks = document.querySelectorAll("nav a");

myBurger.addEventListener("click", function(event){
  myNav.classList.toggle("visible");
  myBurger.classList.toggle("active");
});

myLinks.forEach(function(e) {
  e.addEventListener('click', function() {
    myNav.classList.toggle("visible");
    myBurger.classList.toggle("active");
  });
});


var root = document.querySelector('html');

var cursor = document.querySelector('.cursor');

root.addEventListener('mousemove', function (e) {
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0)';
};

var myBloc2 = document.querySelector(".bloc2");
var myCompetence = document.querySelector(".competences");
myBloc2.addEventListener("mouseenter", function(){
  myCompetence.classList.add("visible");
});

var myHello = document.querySelector(".iamperrine");
window.onload = function(){
  setTimeout(function()
  {
    myHello.classList.add("fade");
  }, 1000);
}

var myHobbies = document.querySelector(".hobbies");
myHobbies.addEventListener("mouseenter", function(){
  myHobbies.classList.add("visible");
});

var myBloc3 = document.querySelector(".bloc3");
var myLeft = document.querySelector(".left");
myBloc3.addEventListener("mouseenter", function(){
  myLeft.classList.toggle('visible');
});



//
// mouvement du background

var backgroundProjet1 = document.querySelector(".projet1");
var backgroundProjet2 = document.querySelector(".projet2");
var backgroundProjet3 = document.querySelector(".projet3");
var backgroundProjet4 = document.querySelector(".projet4");
var backgroundProjet5 = document.querySelector(".projet5");
var backgroundProjet6 = document.querySelector(".projet6");

var movementStrength = 50;
var height = movementStrength / screen.height;
var width = movementStrength / screen.width;

window.addEventListener("mousemove", function(event){
  var pageX = event.pageX - (screen.width / 2);
  var pageY = event.pageY - (screen.height / 2);
  var newvalueX1 = width * pageX * -1;
  var newvalueY1 = height * pageY * -1 + 60;

  var newvalueX2 = width * pageX * -1 + 50;
  var newvalueY2 = height * pageY * -1 + 80;
  backgroundProjet1.style.backgroundPosition = "bottom " + newvalueX1 +"px    left "+newvalueY1+"px";
  backgroundProjet2.style.backgroundPosition = "bottom " + newvalueX2 +"px    right "+newvalueY2+"px";
  backgroundProjet3.style.backgroundPosition = "bottom " + newvalueX1 +"px    left "+newvalueY1+"px";
  backgroundProjet4.style.backgroundPosition = "bottom " + newvalueX2 +"px    right "+newvalueY2+"px";
  backgroundProjet5.style.backgroundPosition = "bottom " + newvalueX1 +"px    left "+newvalueY1+"px";
  backgroundProjet6.style.backgroundPosition = "bottom " + newvalueX2 +"px    right "+newvalueY2+"px";
});



// SLIDER PROJET //
var all_boutonProjet = document.querySelectorAll('.buttonprojet');
var all_containerProjet = document.querySelectorAll('.bloc3 .container');

all_boutonProjet.forEach(function(boutonProjet) {
	boutonProjet.addEventListener('click', function() {
		var num_projet = boutonProjet.dataset.projet;
		var mySlider = document.querySelector('#' + num_projet);
		all_containerProjet.forEach(function(containerProjet) {
			if (containerProjet == mySlider) {
        containerProjet.classList.add('visible');

        // CROIX //
        var cross = document.querySelector('#' + num_projet + ' ' + '.cross');
        cross.addEventListener('click', function() {
          containerProjet.classList.remove('visible');
        });
        // FIN CROIX //

        // SLIDER //
        var slider = document.querySelector('#' + num_projet + ' ' + '.slider');
        var right = document.querySelector('#' + num_projet + ' ' + '.arrow_right');
        var left = document.querySelector('#' + num_projet + ' ' + '.arrow_left');
        console.log(right);
        var index = 0;
        right.addEventListener('click', function() {
          if (index > -200) {
          	index -= 100;
            slider.style.transform = 'translateX(' + index + '%)';
          };
        });
        left.addEventListener('click', function() {
          if (index < 0) {
            index += 100;
            slider.style.transform = 'translateX(' + index + '%)';
          };
        });
        // FIN SLIDER //

      // Fin du if
      }
		});
	});
});
