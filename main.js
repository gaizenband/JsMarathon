const action = document.querySelectorAll('.button');

const character = {
    name: 'picachu',
    defultHP: 100,
    damageHP: 100,
    elHP: document.querySelector('#health-character'),
    elProgressbar: document.querySelector('#progressbar-character'),
}

const enemy = {
    name: 'charmander',
    defultHP: 100,
    damageHP: 100,
    elHP: document.querySelector('#health-enemy'),
    elProgressbar: document.querySelector('#progressbar-enemy'),
}
action.forEach(function(el){
    el.addEventListener('click', function(){
        if (el.id == 'btn-kick') {
            changeHP(random(20), character);
            changeHP(random(20), enemy);
        } else {
            changeHP(random(10), character);
            changeHP(random(10), enemy);
        }
    })
})

function init() {
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        action.forEach(function(el){
            el.disabled = true;
        })
        alert(person.name + ' проиграл');
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();