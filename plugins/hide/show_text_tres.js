let readMore_btn_tres = document.getElementById('readMore_btn_tres');
let hideText_tres = document.getElementById('hideText_tres');

readMore_btn_tres.addEventListener('click', toggleText);

function toggleText() {
  hideText_tres.classList.toggle('showText_tres');

  if(hideText_tres.classList.contains('showText_tres')) {
    readMore_btn_tres.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn_tres.innerHTML = 'Leer mas'
  }
}




