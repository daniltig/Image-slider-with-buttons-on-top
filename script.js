/*const sections = document.querySelectorAll(".flippingThroughSlides");*/
let selectEl;

/*(function (){
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
})();*/

class HelloDiv extends HTMLDivElement {
   constructor() {
      super();
   }
   connectedCallback() {
      console.log(this.children);
      //this.innerHTML += "!!!"

      function onAppend (parentElement, f) {
         console.log("this.children", parentElement.children);
         const sections = document.querySelectorAll(".flippingThroughSlides");
         for (let iterator = 0; iterator < parentElement.children.length; iterator++) {
            f(parentElement.children[iterator].id)
            let but = document.createElement("button"); // создание кнопок
            containerForButtons1.appendChild(but) // добавление кнопок в интерфейс
            but.classList.add("flippingThroughButtons");
            but.onclick = function (event, _iterator=iterator) { // добавляем событие click
               let thisEl = event.target; // определяем элемент, по которому кликнули
               sections[_iterator].scrollIntoView({inline: "start", behavior: "smooth"});

               selectEl.classList.toggle("clickFlippingThroughButton");
               thisEl.classList.toggle("clickFlippingThroughButton");

               selectEl = thisEl;
            }
         }
         containerForButtons1.children[0].classList.add("clickFlippingThroughButton");
         selectEl = containerForButtons1.children[0];


         var observer = new MutationObserver(function(mutations) {
            console.log("mutations>", mutations)
            console.log("this.children", parentElement.children);
            for (let iterator = 0; iterator < parentElement.children.length; iterator++) {
               f(parentElement.children[iterator].id)
               let but = document.createElement("button"); // создание кнопок
               containerForButtons1.appendChild(but) // добавление кнопок в интерфейс
               but.classList.add("flippingThroughButtons");
            }

            /*let iterator = 0;
            //const sections = document.querySelectorAll(".flippingThroughSlides");
            for (let num of document.querySelectorAll(".flippingThroughButtons")) {
               let it = iterator;
               num.onclick = function (event, _iterator=it) { // добавляем событие click
                  let thisEl = event.target; // определяем элемент, по которому кликнули
                  sections[_iterator].scrollIntoView({inline: "start", behavior: "smooth"});

                  selectEl.classList.toggle("clickFlippingThroughButton");
                  thisEl.classList.toggle("clickFlippingThroughButton");

                  selectEl = thisEl;
               }

               iterator++;
            }*/
         })

         observer.observe(parentElement, {childList: true, subtree: false})
      }
      onAppend(this, function(added) {
         console.log("added>", added);
      })
   }
}
customElements.define('hello-div', HelloDiv, {extends: 'div'});
