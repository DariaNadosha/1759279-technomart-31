
// Modal-form

const btnContacts = document.querySelector('.btn-contacts');
const modalForm = document.querySelector('.modal-form');

btnContacts.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalForm.classList.remove('modal-disp-none');
  modalForm.classList.add('modal-active');
});

modalForm.querySelector('.close-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  modalForm.classList.remove('modal-active');
});

// Modal-map

const imgMap = document.querySelector('.img-map');
const modalMap = document.querySelector('.modal-map');

imgMap.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.remove('modal-disp-none');
  modalMap.classList.add('modal-active');
});

modalMap.querySelector('.close-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.remove('modal-active');
});

// Modal-item-added

const btns = document.querySelectorAll('.hover-buy');
const modalItemadded = document.querySelector('.modal-item-added');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => e.preventDefault());
    // modalItemadded.classList.remove('modal-disp-none');
    // modalItemadded.classList.add('modal-active');
};

modalItemadded.querySelector('.close-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  modalItemadded.classList.remove('modal-active');
});




// btns.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     evt.preventDefault();
//   modalItemadded.classList.remove('modal-disp-none');
//   modalItemadded.classList.add('modal-active');
// });
// });

// const btnContacts = document.querySelector('.btn-contacts');
// const modalForm = document.querySelector('.modal-form');

// if (btnContacts) {
//   btnContacts.addEventListener('click', function () {
//     // code ..
//   });
// }

// btnContacts.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   modalForm.classList.add('modal-active');
// });

// modalForm.querySelector('.close-form').addEventListener('click', (evt) => {
//   evt.preventDefault();
//   modalForm.classList.remove('modal-active');
// });

// const btns = document.querySelectorAll('.hover-buy');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     console.log('Кликнули по кнопке ${e.target}');
//   });
// });
