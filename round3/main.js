const allClicks = document.querySelector('body');




document.querySelectorAll('.outer').forEach(item => {
    item.addEventListener('mouseover', event => {

        var showThis = event.target.closest("div.outer");
       if(showThis.classList.value.includes('dropdown-active')){
            return;
        }


        // For left
        if(event.target.classList.value.includes("left-closed")){
            event.target.classList.add('active');

            if(event.target.classList.value.includes("inner")){
                event.target.parentElement.classList.add('active');
                event.target.classList.add('active');

            }
        } else{
            if(event.target.classList.value.includes("inner")){
                event.target.parentElement.classList.add('right-active');
                event.target.classList.add('right-active');

            }
        }

    })

    item.addEventListener('mouseout', event => {
        var showThis = event.target.closest("div.outer");


        // do right side
        if(showThis.classList.value.includes('left-closed')){
            if(showThis.classList.value.includes('dropdown-active')){
                return;
            }
            showThis.classList.remove('active');
        } else{


            if(showThis.classList.value.includes('dropdown-active')){
                return;
            }
            showThis.classList.remove('right-active');
            return;
        }

    })


    item.addEventListener('click', event => {
        var showThis = event.target.closest("div.outer");

// Check for left


        // if(showThis.classList.value.includes('dropdown-active')){
        //     showThis.classList.remove('dropdown-active');
        //     return;
        // }
        // showThis.classList.remove('dropdown-active-right');

        if(showThis.classList.value.includes('dropdown-active-right')){
            showThis.classList.remove('dropdown-active-right');
            return;
        }

        if(showThis.classList.value.includes('dropdown-active')){
            showThis.classList.remove('dropdown-active-right');
            return;
        }





        if(showThis.classList.value.includes('left-closed')){

            showThis.classList.add('dropdown-active');
            return;
        };
        showThis.classList.add('dropdown-active-right');




    })
});
