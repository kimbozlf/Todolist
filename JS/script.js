let input = document.querySelector("#additem");
let btnAdd = document.querySelector("#add");
let items = document.getElementsByClassName("items");
let ul = document.querySelector("ul");

function createListElement() {
  let li = document.createElement("li");
  let text = document.createElement("p")
  text.appendChild(document.createTextNode(input.value));
  li.append(text)
  ul.append(li);
  input.value = "";

  /**** Create close button ***/
  let closeBtn = document.createElement("button");
  let wrongFont = document.createElement("span");
  closeBtn.classList.add("closebtn");
  wrongFont.classList.add("fas");
  wrongFont.classList.add("fa-trash");
  closeBtn.appendChild(wrongFont);
  li.append(closeBtn);

  function deleteItem() {
    li.style.display = "none";
  }
  closeBtn.addEventListener("click", deleteItem);
  /**** End Create close button ***/

  /**** Create done button ***/
  let acceptBtn = document.createElement("button");
  let checkFont = document.createElement("span");
  acceptBtn.classList.add("donebtn");
  checkFont.classList.add("fa");
  checkFont.classList.add("fa-check");
  acceptBtn.appendChild(checkFont);
  li.append(acceptBtn);

  function doneItem() {
    li.classList.toggle("done");
  }
  acceptBtn.addEventListener("click", doneItem);
  /**** End Create done button ***/

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.appendChild(closeBtn);
  buttons.appendChild(acceptBtn);
  li.append(buttons);
}

function checkInput() {
  if (input.value == "") {
    alert("box is empty!!!");
  } else {
    createListElement();
  }
}
function checkLenghtInput() {
  return input.value.length;
}
function addAfterPress() {
  if (checkLenghtInput() > 0 && event.which == 13) {
    createListElement();
  }
}
btnAdd.addEventListener("click", checkInput);
input.addEventListener("keypress", addAfterPress);
