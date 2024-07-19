const track = document.getElementById('image-track');

// mouse down event
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

// mouse up event
window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage; // Corrected this line
}

// mouse move event
window.onmousemove = e => {
    // if mouse is not down
    if (track.dataset.mouseDownAt === "0") return; // Corrected this line

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;

    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, 0%)` // Updated this line
    }, { duration: 1200, fill: "forwards" });

    const listImage = track.getElementsByClassName("image");
    for (const image of listImage) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center` // Corrected this line
        }, { duration: 1200, fill: "forwards" });
    }
}

