const search_btn = document.querySelector('.header__search-btn');
const searchfield = document.querySelector('.header__seachfield');

search_btn.addEventListener('click', function(event) {
  if (!searchfield.value) {
    event.preventDefault();
  
    searchfield.hidden = false;
    searchfield.focus();
  }
});

searchfield.addEventListener('blur', function({ target: { value } }) {
  if (!value) {
    searchfield.hidden = true;
  }
});
