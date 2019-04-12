

// Setup opening a modal
function modalSetup() {
    let listElements = document.getElementsByTagName('li');
    for (let index = 0; index < listElements.length; index++) {
        let li = listElements[index];
        li.addEventListener('click', function () {
            let name = this.id;
            let modal = document.querySelector(`#${name}-modal`)
            modal.style.display = 'block';
        })
    }

    //Setup the close button
    let closeBtns = document.querySelectorAll('.close');

    for (let index = 0; index < closeBtns.length; index++) {
        let btn = closeBtns[index];
        btn.addEventListener('click', function () {
            let currentModal = document.querySelectorAll('.modal');
            currentModal[index].style.display = 'none';
        })
    }
}

function setup(){
    modalSetup();
    console.log('Modals were setup')
}


setup();