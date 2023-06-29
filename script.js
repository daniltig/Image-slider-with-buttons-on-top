const sections = document.querySelectorAll(".flippingThroughSlides");
let selectEl = selectFlippingThroughButton;
/*let currentSection = 0;

div0.addEventListener('wheel', function(e) {
   e.preventDefault();



   if (e.deltaY < 0) {
      if (0 < currentSection){
         currentSection--;
      }
   }
   else {
      if (currentSection < (sections.length - 1)){
         currentSection++;
      }
   }

   sections[currentSection].scrollIntoView({inline: "start", behavior: "smooth"});
});*/

(function (){
   let iterator = 0;
   for (let num of document.querySelectorAll(".flippingThroughButtons")) {
      let it = iterator;
      num.onclick = function (event, _iterator=it) {
         let thisEl = event.target;
         sections[_iterator].scrollIntoView({inline: "start", behavior: "smooth"});

         selectEl.classList.toggle("clickFlippingThroughButton");
         thisEl.classList.toggle("clickFlippingThroughButton");

         selectEl = thisEl;
      }

      iterator++;
   }
})();
