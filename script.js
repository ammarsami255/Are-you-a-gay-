const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});

yesButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

noButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation(); 
});
