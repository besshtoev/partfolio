const GamburgerButtun = document.querySelector('.gamburger');
const NavLinks = document.querySelector('.nav__links');
GamburgerButtun.onclick = function () {
    GamburgerButtun.classList.toggle('gamburger_active');
    NavLinks.classList.toggle('nav__links_active');
}

const LinkAll = document.querySelectorAll('.nav__links a');

for (let i = 0; i < LinkAll.length; i++) [
    LinkAll[i].onclick = function () {
        GamburgerButtun.classList.remove('gamburger_active');
        NavLinks.classList.remove('nav__links_active');
    }
]
