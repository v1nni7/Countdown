let modal = document.getElementById('modal');
let btn = document.querySelector('.btn-open-modal');
let span = document.getElementsByClassName('close')[0];
let btnCloseModal = document.querySelectorAll('.btn-close-modal');

btn.onclick = function () {
    modal.style.display = 'flex';
}

btnCloseModal.onclick = function () {
    modal.style.display = 'none';
}

btnCloseModal.forEach(el => {
    el.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}