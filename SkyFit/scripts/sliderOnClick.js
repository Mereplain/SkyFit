const btnLeft = document.querySelector('.popular-activities__button-left');
const btnRight = document.querySelector('.popular-activities__button-right');
const sliderContainer = document.querySelector('.popular-activities__content-cards'); 
const sliderElements = document.querySelectorAll('.popular-activities__card');

let cards = Array.from(sliderElements);

function addNewCardsToContainer(newArrWithCards) {
    sliderContainer.innerHTML = '';
    newArrWithCards.forEach(card => {
        sliderContainer.appendChild(card);
    });
}

function shuffleCards(direction) {
    let shuffledCards = [];
    
    if (direction === 'left') {
        shuffledCards = [...cards.slice(1), cards[0]];
    } else if (direction === 'right') {
        shuffledCards = [cards[cards.length - 1], ...cards.slice(0, -1)];
    }

    cards = shuffledCards;
    addNewCardsToContainer(shuffledCards);
}

btnLeft.addEventListener('click', () => shuffleCards('left'));
btnRight.addEventListener('click', () => shuffleCards('right'));