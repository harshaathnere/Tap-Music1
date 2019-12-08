window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d360",
       " #d3d3d3",
        "#c060d3",
        "#60d3a7",
        "#d3609f",
       "magenta"

    ];
 

    //lets get going with the sound here
    pads.forEach((pad,index) => {
     pad.addEventListener('click', function(){
         sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
     });
    });
    //Creates a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
           visual.removeChild(this);
        });
    };
});