'use stric';

// --------------------Sign Up PopUp Content--------------------

//Sign in button 클릭시 modal popup
//window창 클릭 시 modal close
const singupBtn = document.querySelector(".sign-up");
const modal = document.querySelector(".modal");

window.addEventListener('load', setup);

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {
    let modalRoot = query('.modal-root');
    let button = get('sign-in');
    let modal = query(".modal");

    modalRoot.addEventListener('click', rootClick);
    button.addEventListener('click', openModal);
    modal.addEventListener('click', modalClick);

    function rootClick() {
        modalRoot.classList.remove('open');
    }

    function openModal(){
        modalRoot.classList.add('open');
    }

    function modalClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    }
}