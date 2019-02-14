const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

// listDiv.addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
// });
// listDiv.addEventListener('mouseout', () => {
//     listItems[i].textContent = listItems[i].textContent.toLowerCase();
// });


document.addEventListener('click', (event) => {
    console.log(event.target);
});


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
  descriptionInput.value = '';
});
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});