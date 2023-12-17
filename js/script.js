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
const id = '1496990785';
const token = '6717854544:AAFPHVx-HO3THJtnoJRwX8vblGYvbYDMErk';
const form = document.querySelector('form');
const wrapper = document.querySelector('.wrapper');
form.onsubmit = function () {
    const Name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const coment = document.querySelector('#coment').value;
    const MasageText = `Новая заявка сайта ProWeb \nИмя - ${Name} \nEmail - ${email} \nКомментарии - ${coment}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: id ,
        text: MasageText,
    };
    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
            wrapper.classList.add('wrapper_active');
            setTimeout(() => {
                form.reset();
                wrapper.classList.remove('wrapper_active');
            }, 3000);
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
        });
    return false
}
