var playBtn = document.querySelector('.playBtn');
var player1, player2;
var namesBtn = document.querySelector('.names');
var form = document.getElementById('data_form');
namesBtn.addEventListener('click', function () {
    document.querySelector('.modal_overlay').classList.add('modal_overlay--active');
});

document.querySelector('.modal_overlay').addEventListener('click', function (e) {
    if (e.target.classList.contains('span_close')) {
        document.querySelector('.modal_overlay').classList.remove('modal_overlay--active');
    }
    if (e.target.classList.contains('main_modal_button')) {
        document.querySelector('.player1').innerHTML = document.querySelector('.task').value;
        e.preventDefault();
        document.querySelector('.modal_overlay').classList.remove('modal_overlay--active');
        form.reset();
        document.querySelector('.modal_overlay1').classList.add('modal_overlay1--active');
    }
})

document.querySelector('.modal_overlay1').addEventListener('click', function (e) {
    if (e.target.classList.contains('span_close')) {
        document.querySelector('.modal_overlay1').classList.remove('modal_overlay1--active');
    }
    if (e.target.classList.contains('main_modal_button1')) {
        document.querySelector('.player2').innerHTML = document.querySelector('.task1').value;
        e.preventDefault();
        document.querySelector('.modal_overlay1').classList.remove('modal_overlay1--active');
        form.reset();
    }
})



playBtn.addEventListener('click', function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = 'dice' + randomNumber1 + '.png';
    var randomImageSource = 'images/' + randomDiceImage;
    var image1 = document.querySelectorAll('img')[0];
    image1.setAttribute('src', randomImageSource);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
    var image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src', randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        player1 = document.querySelector('.player1').innerHTML;
        document.querySelector('h1').innerHTML = '🚩' + player1 + ' WINS!';
    } else if (randomNumber2 > randomNumber1) {
        player2 = document.querySelector('.task1').value;
        document.querySelector('h1').innerHTML = '🚩' + player2 + ' WINS!';

    } else {
        document.querySelector('h1').innerHTML = '🚩Draw!';
    }
});
