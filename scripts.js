const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('Button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li')[0];

//functionname(created above).function('what to listen for', callback function)
listItems.addEventListener('mouseover', () => {
    listItems.textContent = listItems.textContent.toUpperCase();
})
listItems.addEventListener('mouseout', () => {
    listItems.textContent = listItems.textContent.toLocaleLowerCase();
})

toggleList.addEventListener('click', () => { //when the toggle is clicked:
  if (listDiv.style.display == 'none') { //if the Div with class list is set to NONE:
    toggleList.textContent = 'Hide list'; //changes button text depending on status
    listDiv.style.display = 'block'; //change the display style to "block"
  } else {  // else change the display to "none"
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];//this returns a COLLECTION; since there is only 1 item, we can access it with [0]
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
});

