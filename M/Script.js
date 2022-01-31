const log = document.getElementById('sus');

document.addEventListener("keydown", susSet);

function susAdd()
{
    console.log('susAdd');
// document.getElementById('dummy').scrollIntoView();
var susContent = Math.random();
if (susContent > 0.75) {
    log.textContent += 'sus';
    } else if (susContent > 0.25 && susContent < 0.30) {
    log.textContent += 'impostor ';
    } else if (susContent < 0.32 && susContent > 0.30) {
    log.textContent += 'electrical ';
    } else if (susContent > 0.33 && susContent < 0.35) {
    log.textContent += 'vent ';
    } else if (susContent > 0.36 && susContent < 0.40) {
    log.textContent += 'meeting ';
    } else if (susContent > 0.41 && susContent < 0.45) {
    log.textContent += 'coms ';
    } else if (susContent > 0.46 && susContent < 0.48) {
    log.textContent += 'O2 ';
    } else if (susContent > 0.49 && susContent < 0.50) {
    log.textContent += '           !Emergency Meeting!          ';
    } else if (susContent > 0.51 && susContent < 0.54) {
    log.textContent += 'when the impostor is ';
    } else if (susContent > 0.55 && susContent < 0.70) {
    log.textContent += 'red ';
    } else if (susContent > 0.71 && susContent < 0.72) {
    log.textContent += 'Reactor sabotaged! ';
    } else if (susContent > 0.73 && susContent < 0.74) {
    log.textContent += 'tasks';
    } else {
    log.textContent += 'amogus ';
    }  
}

function susSet() {
    console.log('susSet');
    susAdd();
    susAdd();
}