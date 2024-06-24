// Locomotive Scroll Initialization
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.09
});

// GSAP and Locomotive Scroll Integration
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});
scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// Shery.js Initialization
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".sites" ,{ images: 
    [
    "https://i.pinimg.com/736x/45/5f/60/455f60c56c840160e19760efdf9fcc50.jpg", 
    "https://cdn3d.iconscout.com/3d/free/thumb/free-linkedin-9730456-7970197.png",
    "https://cdn3d.iconscout.com/3d/free/thumb/free-dribbble-5622935-4684834.png?f=webp", 
    "https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png",
    "https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_media___youtube_logo_video_multimedia_stream_download_play_clip.png",
    "https://cdn3d.iconscout.com/3d/free/thumb/free-behance-4703922-3915174.png",
    "https://cdn3d.iconscout.com/3d/free/thumb/free-twitter-logo-5476203-4602454.png?f=webp"

] });


// Video Play on Hover
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".containerOne");
    containers.forEach(function(container) {
        var video = container.querySelector("video");
        container.addEventListener("mouseenter", function() {
            video.play();
        });
        container.addEventListener("mouseleave", function() {
            video.currentTime = 0;
            video.pause();
        });
    });
});

// Scroll Animation
function ScrollAnimation() {
    window.addEventListener("wheel", function(dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marquee", {
                transform: 'translateX(-200%)',
                duration: 20,
                repeat: -1,
                ease: "none"
            });
            gsap.to(".marquee img", {
                rotate: 180 
            });
        } else {
            gsap.to(".marquee", {
                transform: 'translateX(100%)',
                duration: 20,
                repeat: -1,
                ease: "none"
            });
            gsap.to(".marquee img", {
                rotate: 0 
            });
        }
    });
}
ScrollAnimation();

// Drag feature, currently not working

// Mouse Interaction on Designs Section
// const track = document.querySelector('.designs');
// window.onmousedown = e => track.dataset.mouseDownAt = e.clientX;
// window.onmouseup = e => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage || "0";
// };
// window.onmousemove = e => {
//     if (track.dataset.mouseDownAt === "0") return;
//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//     const maxDelta = window.innerWidth / 2;
//     const percentage = (mouseDelta / maxDelta) * -100;
//     const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
//     const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
//     track.dataset.percentage = nextPercentage;
//     track.animate({ transform: `translate(${nextPercentage}%, 0%)` }, { duration: 1200, fill: "forwards" });
//     const listImage = track.getElementsByTagName("img");
//     for (const image of listImage) {
//         image.animate({ objectPosition: `${100 + nextPercentage}% center` }, { duration: 1200, fill: "forwards" });
//     }
// };

// Circular Text Animation
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) => `<span style="transform:rotate(${i * 15.3}deg)">${char}</span>`
).join('');

// GSAP Animations

gsap.from(".images, .headings, .mot", {
    y: 150,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.5
});

gsap.from(".page3 .video, .desc", {
    opacity: 0,
    scale: 0,
    duration: 0.9,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page3 .video",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".projecthead h1", {
    y: 150,
    duration: 0.5,
    stagger: 0.8,
    scrollTrigger: {
        trigger: ".project",
        scroller: "[data-scroll-container]"
       
    }
});

gsap.from(".containerOne", {
    y: 150,
    duration: 0.9,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".one",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".two", {
    y: 150,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".two",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".philosophy .headings h1", {
    y: 150, 
    delay: 0.5,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".philosophy",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".philoVideo, philosophy .desc", {
    opacity: 0,
    scale: 0,
    delay: 1.5,
    duration: 0.8,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".philosophy .headings",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".development .headings h1", {
    y: 150, 
    duration: 0.5,
    delay: 0.8,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".development",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".designs", {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    stagger: 1,
    scrollTrigger: {
        trigger: ".designs",
        scroller: "[data-scroll-container]"
    }
});

gsap.from(".allrsrccontent", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".allrsrc",
        scroller: "[data-scroll-container]"
    }
});
gsap.from(".design", {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    stagger: 1,
    scrollTrigger: {
        trigger: ".design",
        scroller: "[data-scroll-container]",
    }
});
