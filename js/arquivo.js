const btnmenu = document.getElementById('bntmenu');

function togglemenu(event) {

    if(event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expandent', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu');
    }
};

btnmenu.addEventListener('click', togglemenu);
btnmenu.addEventListener('touchstart', togglemenu);