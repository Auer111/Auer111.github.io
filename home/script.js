if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    activePanelForMobile();
}

let active = 0;
let userInteracted = false;
function activePanelForMobile() {
    if(userInteracted) return;
    [...document.querySelectorAll(".col")].forEach((el, i) => {           
        if (i === active) {
            el.focus();
        }
    });
    active = active < 2 ? active +1  : 0;
    if(!userInteracted){
        setTimeout(activePanelForMobile, 2000);
    }
}

document.addEventListener('mousedown', () => {userInteracted = true});
document.addEventListener('keydown', () => {userInteracted = true});
document.addEventListener('touchstart', () => {userInteracted = true});

  