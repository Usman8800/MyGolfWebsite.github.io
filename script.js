let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dts) {
    cursor.style.left = dts.x - 10 + "px",
        cursor.style.top = dts.y - 10 + "px"
    blur.style.left = dts.x - 200 + "px",
        blur.style.top = dts.y - 200 + "px"
})



gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        scrub: 1

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 1

    }
})

let h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 4
        cursor.style.border = "0.1px solid white"
        cursor.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0.1px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"

    })
})

gsap.from("#about-us , #line", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 50%",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})

