const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUL = document.querySelector('ul');
const lis = listUL.children;

//create a function that adds js using JS (not html)
function attachListItemButtons(li){
  let up = document.createElement('button');
  up.className = "up";
  up.textContent = "up";
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = "down";
  down.textContent = "down";
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);

}
//loop through HTML to add buttons using previous function and targeting children
for(let i = 0; i < lis.length; i+=1){
  attachListItemButtons(lis[i]);
}

//object.method (object was devlared above). Adds event listener that targets clicks for each different button
listUL.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      if(event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
      if(event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if(prevLi){
          ul.insertBefore(li, prevLi);
        }
      }
      if(event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        ul.insertBefore(nextLi, li);
        if(nextLi){
          ul.insertBefore(li, nextLi);

        }

      }

    }
  });


// Hide list by changing display
togglelist.addEventListener('click', () => {
  if (listDiv.style.display != "none") {
    togglelist.textContent = "display list"
    listDiv.style.display = "none"
  } else {
    togglelist.textContent = "hide list"
    listDiv.style.display = "block";
  }
  
})

// Change title of liste by targeting innerhtml. Object.method, and objects are declared above
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// Add items with a click, and use the function created at the top of
// this page (attachListItemButtons) to loop through and add buttons to page
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);

  ul.appendChild(li);
  addItemInput.value = '';
});
