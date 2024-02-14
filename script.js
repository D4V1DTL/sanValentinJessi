const alternatives = [
    {text:"", images:"images/cat-01.jpg"},
    {text:"chamaquina di si p :c", images:"images/cat-02.jpg"},
    {text:"Piénsalo de nuevo", images:"images/cat-03.jpg"},
    {text:"oe dale que si p", images:"images/cat-04.webp"},
    {text:"dale que si p >:v", images:"images/cat-05.webp"}
];
const ohyes = {text:"ya piola baby", images:"images/cat-yes.webp"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});