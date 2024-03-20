
let navbarMenu = document.getElementById('menu');
let navbarIcon = document.getElementById('navIcon')

navbarIcon.addEventListener('click', () => {
  // navbarIcon.src = './assets/img/navbar-Icon.svg'
  // navbarIcon.src = './assets/img/Xmark.svg'
  navbarMenu.classList.toggle('active')
  function chnging() {
    let image = document.getElementById('navIcon').src = './assets/img/navbar-Icon.svg';
  
    if (image) {
      document.getElementById('navIcon').src = './assets/img/navbar-Icon.svg'
    } else if (!image) {
      document.getElementById('navIcon').src = './assets/img/Xmark.svg';
      alert(image);
    }
  }
})
chnging();


