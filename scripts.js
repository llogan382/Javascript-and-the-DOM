var myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1 ) {
  myList[i].style.color = 'purple';
}

var notPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < notPurple.length; i += 1 ) {
  notPurple[i].style.color = 'red';
}