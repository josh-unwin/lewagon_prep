window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pad = document.querySelectorAll(".pad");
    const visual = document.querySelector(".visual");
    const colours = ["green", "red", "purple", "blue", "yellow", "orange"];

    // Sounds play here with clicks
    pad.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
          });
    }); 
    // Visual bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    };

    // Keyboard clicks
    window.addEventListener('keypress', function() {
        const key = this.event.keyCode;
        switch(key) {
            case 49:
                sounds[0].currentTime = 0;
                sounds[0].play();
                createBubbles(0);
                break;
            case 50:
                    sounds[1].currentTime = 0;
                    sounds[1].play();
                    createBubbles(1);       
                    break;     
            case 51:
                    sounds[2].currentTime = 0;
                    sounds[2].play();
                    createBubbles(2); 
                    break;
            case 52:
                    sounds[3].currentTime = 0;
                    sounds[3].play();
                    createBubbles(3); 
                    break;
            case 53:
                    sounds[4].currentTime = 0;
                    sounds[4].play();
                    createBubbles(4); 
                    break;
            case 54:
                    sounds[5].currentTime = 0;
                    sounds[5].play();
                    createBubbles(5);
                    break;
        }
    } )
});