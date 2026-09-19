const track = document.getElementById('carouselTrack');

const cards = [...track.children];

cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
});

let posicao = 0;
let larguraOriginal = track.scrollWidth / 2;

function mover() {
    posicao -= 1.5;

    if (Math.abs(posicao) >= larguraOriginal) {
        posicao = 0;
    }

    track.style.transform = `translateX(${posicao}px)`;

    requestAnimationFrame(mover);
}

mover();