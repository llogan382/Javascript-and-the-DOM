const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.getElementsByClassName('description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


togglelist.addEventListener('click', () => {
  if (listDiv.style.display != "none") {
    togglelist.textContent = "display list"
    listDiv.style.display = "none"
  } else {
    togglelist.textContent = "hide list"
    listDiv.style.display = "block";
  }
  
})

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
})
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
})