const burgerActiveClass = 'burger--active';
const mobileNavActiveClass = 'navigation__links--mobile-active';

const burger = document.getElementById('burger');
const navigationLinks = document.getElementsByClassName('navigation__links')[0];

burger.addEventListener('click', () => {
  if (burger.classList.contains(burgerActiveClass)) {
    burger.classList.remove(burgerActiveClass);
    navigationLinks.classList.remove(mobileNavActiveClass);
  } else {
    burger.classList.add(burgerActiveClass);
    navigationLinks.classList.add(mobileNavActiveClass);
  }
});

const dropClass = '.navigation__drop';
const dropActiveClass = 'navigation__drop--active';

const drops = document.querySelectorAll(dropClass);
for(let i = 0;i < drops.length; i++ )
{
  const drop = drops[i]; 
  drop.addEventListener('click', () => {
    if (drop.classList.contains(dropActiveClass)) {
      drop.classList.remove(dropActiveClass);
    }
    else {
      drop.classList.add(dropActiveClass);
    }
  })
}
