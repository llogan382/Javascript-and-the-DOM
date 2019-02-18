const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUL = document.querySelector('ul');
const lis = listUL.children;

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
for(let i = 0; i < lis.length; i+=1){
  attachListItemButtons(lis[i]);
}

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
  attachListItemButtons(li);

  ul.appendChild(li);
  addItemInput.value = '';
});
