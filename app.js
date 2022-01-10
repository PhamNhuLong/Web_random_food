var eWHich = document.querySelector('.card.which p:last-child')
var angi = document.querySelector('.card.which p:first-child')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var el = document.querySelector("#result")
var img = document.createElement("img");

var arr = [
    
    'Bún đậu mắm tôm',
    'Ăn tao hông',
    'Bún cá',
    'Bánh canh',
    'Bánh xèo',
    'Bánh canh cá lóc',
    'Cơm gà xốt cay',
    'Cơm sườn',
    'Lẩu chay',
    'Cơm gà xé',
    'Cơm chiên dương châu',
    'Bún cá lóc',
    'Bò né',
    'Hủ tiếu'
];

let random_cu = 33;
document.addEventListener('keydown',e=>{
    
    eWHich.innerText = 'Hông ăn thì nhấn tiếp'
    let temp;
    var random = Math.floor(Math.random() * 14) + 1;
    while(random == random_cu){
        random = Math.floor(Math.random() * 14) + 1;
    }
    let tam = e.which % random
    temp = tam + '.jpg'
    angi.innerText = arr[tam]          
    img.setAttribute('src', `${temp}`);
    el.appendChild(img)
    alert.classList.add('hide')
    box.classList.remove('hide')
    random_cu = random;
})