
//let selectEl;

class HelloDiv extends HTMLDivElement {
   constructor() {
      super();
   }
   connectedCallback() {
      var observer = new MutationObserver(function(mutations) {
         const sections = document.querySelectorAll(".divWithFlippingThroughSlides");
         //console.log("this.children", parentElement.children);

         for(let num of sections){
            const sections = document.querySelectorAll(".flippingThroughSlides");
            for (let iterator = 0; iterator < num.children.length; iterator++) {
               //f(num.children[iterator].id)
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
            let selectEl = containerForButtons1.children[0];
         }
      })

      observer.observe(this, {childList: true, subtree: false})
   }
}
customElements.define('hello-div', HelloDiv, {extends: 'div'});
