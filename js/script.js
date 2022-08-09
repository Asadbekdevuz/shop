let elForm = document.querySelector(".form");
let elInput = elForm.querySelector(".form__input");
let elList = document.querySelector(".form__list");


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let inputValue = elInput.value;
  
  let foodList = [""]
  foodList.push;

  for ( foodList of inputValue ) {

  let elItem = document.createElement("li");
  elItem.textContent = inputValue;
  elList.appendChild(elItem);
  elItem+= food[i];
}
})


