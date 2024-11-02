


let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', openPopUp);

function openPopUp() {
  let mob = document.querySelector('.mobile-menu');
  mob.style.display = 'flex';
}

let mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.addEventListener('click', hidePopUp);

function hidePopUp() {
  let mob = document.querySelector('.mobile-menu');
  mob.style.display = 'none';
}





















