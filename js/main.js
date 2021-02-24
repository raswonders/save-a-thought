function getUlElem() {
  return document.querySelectorAll("ul")[0];
}

function save() {
  // Create new li element with msg content
  let inputElem = document.querySelectorAll("input")[0];
  let liElem = document.createElement("li");

  // If msg is empty quit
  if (inputElem.value == "") {
    return
  }

  const content = document.createTextNode(inputElem.value);
  liElem.appendChild(content);

  // add li into the body
  getUlElem().appendChild(liElem);
  inputElem.value = "";
}

function deleteAll() {
  
}
