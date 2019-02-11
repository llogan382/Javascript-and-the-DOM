var myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1 ) {
  myList[i].style.color = 'purple';
}

var notPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < notPurple.length; i += 1 ) {
  notPurple[i].style.color = 'red';
}

var evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1 ) {
  evens[i].style.backgroundColor = 'lightblue';
}