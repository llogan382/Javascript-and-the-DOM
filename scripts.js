const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => { //when the toggle is clicked:
  if (listDiv.style.display == 'none') { //if the Div with class list is set to NONE:
    toggleList.textContent = 'Hide list'; //changes button text depending on status
    listDiv.style.display = 'block'; //change the display style to "block"
  } else {  // else change the display to "none"
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

