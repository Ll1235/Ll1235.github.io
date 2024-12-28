document.addEventListener('scroll', (e) => {
    let header = document.querySelector('.header');

    if(window.scrollY === 0){
        header.style.cssText = `
            background-color: #222222;
        `;
    } else {
        header.style.cssText = `
            background-color: #111111;
        `;
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('order-link')){
        e.preventDefault();
        let el = document.querySelector('.order');
        el.scrollIntoView({ block : 'center' });
    }
});