const para = document.querySelector('p');

function showConsole() {
    console.log('Click');
}

para.onclick = showConsole;
