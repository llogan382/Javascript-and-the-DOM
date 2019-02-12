const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.getElementsByClassName('description');

togglelist.addEventListener('click', () => {
  if (listDiv.style.display != "none") {
    togglelist.textContent = "display list"
    listDiv.style.display = "none"
  } else {
    togglelist.textContent = "hide list"
    listDiv.style.display = "block";
  }
  
})

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
})

p.title = 'list description';