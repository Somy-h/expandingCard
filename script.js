const panels = document.querySelectorAll('.panel');

/* panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //console.log('click happened');
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
} */



/* The Other Way: Using Closure Concept */

function event_handler() {
    let activeClassIndex = 0;
    return function(i) {
        //console.log(i, activeClassIndex);
        panels[activeClassIndex].classList.remove('active');
        panels[i].classList.add('active');
        activeClassIndex = i;
    }
}

const handle = event_handler();
panels.forEach((panel, index, panels) => {
    panel.addEventListener('click', () => {
        handle(index);
    });
});


