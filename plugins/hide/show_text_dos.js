let readMore_btn_dos = document.getElementById('readMore_btn_dos');
let hideText_dos = document.getElementById('hideText_dos');

readMore_btn_dos.addEventListener('click', toggleText);

function toggleText() {
  hideText_dos.classList.toggle('showText_dos');

  if(hideText_dos.classList.contains('showText_dos')) {
    readMore_btn_dos.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn_dos.innerHTML = 'Leer mas'
  }
}




