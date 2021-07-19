// Modal-form

const btnContacts = document.querySelector('.btn-contacts');
const modalForm = document.querySelector('.modal-form');

btnContacts.addEventListener('click', (evt) => {
  evt.preventDefault();
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
  modalMap.classList.add('modal-active');
});

modalMap.querySelector('.close-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.remove('modal-active');
});
