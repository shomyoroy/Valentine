document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    document.getElementById("background-music").play();
    
    // No button shakes and spawns evil faces when hovered
    noButton.addEventListener('mouseenter', function () {
        noButton.classList.add('shake');
        generateEvilFaces();
    });
    
    // No button stops shaking when the mouse leaves
    noButton.addEventListener('mouseleave', function () {
        noButton.classList.remove('shake');
    });

    // Yes button triggers confetti and music
    yesButton.addEventListener('click', function () {
        alert('Yay! Can’t wait for our date, Love! ❤️');
        confetti();
    });

    // Function to generate multiple evil face emojis
    function generateEvilFaces() {
        for (let i = 0; i < 10; i++) {
            let evilFace = document.createElement('div');
            evilFace.innerHTML = '😈';
            evilFace.classList.add('evil-face');
            document.body.appendChild(evilFace);
            
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            
            evilFace.style.left = `${x}px`;
            evilFace.style.top = `${y}px`;
            
            // Remove the emoji after 1 second
            setTimeout(() => {
                evilFace.remove();
            }, 1000);
        }
    }
});
