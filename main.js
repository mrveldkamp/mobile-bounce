// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

// Ball Object
let ball = {
    x: cnv.width / 2,
    y: cnv.height / 2,
    r: 20,
    dx: 5,
    dy: 5
}

let move = false;


// Main Program Loop
requestAnimationFrame(draw);

function draw() {

    if (move) {
        // Logic
        ball.x += ball.dx;
        if (ball.x + ball.r > cnv.width || ball.x - ball.r < 0) {
            ball.dx = -ball.dx;
        }

        ball.y += ball.dy;
        if (ball.y + ball.r > cnv.height || ball.y - ball.r < 0) {
            ball.dy = -ball.dy;
        }
    }


    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw the Ball
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.fill();


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener("click", () => move = !move);