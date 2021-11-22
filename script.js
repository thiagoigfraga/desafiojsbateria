const form = document.querySelector('.composer input');
const button = document.querySelector('.composer button');

document.body.addEventListener('keyup', (event) => {
    if (event.target != form) {
        playSound(event.code.toLowerCase());
    }
});

button.addEventListener('click', () => {
    let sequenciaTeclas = form.value.split('');
    let i = 0;

    sequenciaTeclas.forEach((tecla) => {
        setTimeout(() => {
            playSound(`key${tecla}`);
        }, (i += 300));
    });
});

function playSound(sound) {
    const todasteclasBateria = document.querySelectorAll('[data-key^=key]');
    const teclaTocada = document.querySelector(`[data-key=${sound}]`);

    if (teclaTocada != null) {
        const audio = new Audio(`./sounds/${sound}.wav`);

        todasteclasBateria.forEach((tecla) => tecla.classList.remove('active'));

        teclaTocada.classList.add('active');

        setTimeout(() => teclaTocada.classList.remove('active'), 300);

        audio.play();
    }
}
