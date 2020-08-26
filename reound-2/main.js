const allClicks = document.querySelector('body');




document.querySelectorAll('.outer').forEach(item => {



    item.addEventListener('mouseover', event => {
        var showThis = event.target.closest("div.outer");
       if(showThis.classList.value.includes('dropdown-active')){
            return;
        }

        if(event.target.classList.value.includes("inner")){
            event.target.parentElement.classList.add('active');
            event.target.classList.add('active');

        }
    })

    item.addEventListener('mouseout', event => {
        var showThis = event.target.closest("div.outer");

        if(showThis.classList.value.includes('dropdown-active')){
            return;
        }
        showThis.classList.remove('active');
    })


    item.addEventListener('click', event => {
        var showThis = event.target.closest("div.outer");
        var showThat = event.target.closest("div.outer");


        if(showThis.classList.value.includes('dropdown-active')){

            showThis.classList.remove('dropdown-active');
            return;
        }

        showThis.classList.add('dropdown-active');
    })
});
