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

        var outer = event.target.closest("div.outer");
        var inner = event.target.closest("div.inner");
        // event.target.classList.add('sec-hover');

        if(event.target.classList.value.includes("outer") ||event.target.classList.value.includes("inner")  ){

            event.target.classList.add('parent-dropdown');
            // console.log('hello');
        }


    })
    item.addEventListener('mouseout', event => {
        event.target.classList.remove('parent-dropdown');

    })

    item.addEventListener('click', event => {
        // console.log(event.target);
        var showThis = event.target.closest("div").children[1];
        var removeClip = event.target.closest("div.container");



        if (showThis) {
            showThis.classList.toggle('hidden');
            removeClip.style.clipPath = "none";
        }
        // showThis.classList.toggle("hidden");
    })
})

// Refine the outer and the inner