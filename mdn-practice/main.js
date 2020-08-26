const allClicks = document.querySelectorAll('.container');


// allClicks.addEventListener("click", mdnClickedScreen);

// function mdnClickedScreen(event) {

//     var sec1 = event.target.classList.contains('section1');
//     var par1 = event.target.parentNode.classList.contains('section1');
//     var allClicks = document.querySelector('.container1 > .displayed');
//     if (sec1 || par1) {
//         allClicks.classList.toggle('hidden');
//     }
// }

document.querySelectorAll('.container').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = "green";
    })
    item.addEventListener('mouseout', event => {
        event.target.style.color = "black";
    })

    item.addEventListener('click', event => {
        // console.log(event.target);
        var showThis = event.target.closest("div.container").children[1];
        if (showThis) {
            showThis.classList.toggle('hidden');
        }
        // showThis.classList.toggle("hidden");
    })
})
