var blocks = document.querySelector('.mdn-intl-outer');

blocks.addEventListener("click", expandBlock);

function expandBlock(event){
    // console.log('works!');
    console.log(event.target);
}