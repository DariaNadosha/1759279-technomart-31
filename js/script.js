const btnContacts = document.querySelector('.btn-contacts');
const modalForm = document.querySelector('.modal-form');

if (btnContacts) {
  btnContacts.addEventListener('click', function () {
    // code ..
  });
}

btnContacts.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalForm.classList.add('modal-active');
});

modalForm.querySelector('.close-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  modalForm.classList.remove('modal-active');
});

const btns = document.querySelectorAll('.hover-buy');
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log('Кликнули по кнопке ${e.target}');
  });
});
