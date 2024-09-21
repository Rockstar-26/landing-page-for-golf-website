var tl = gsap.timeline()

tl.to("#nav",{
backgroundColor: "black",
height:"70px",
duration:1,
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    scrub:1
}
})


gsap.from(".card",{
    // scale:0,
    x:-800,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
    }
})

gsap.to("#page4 h1",{
    y:-40,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",

    }
})

gsap.from(".elem",{
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body"
    }
})

gsap.to("#page3 #imag1",{
    x:60,
    y:50,
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"body",
        start:"top 80%",
    }
})

gsap.to("#page3 #imag2",{
    x:-190,
    y:-50,
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"body",
        start:"top 80%",
        // markers:true
}

})