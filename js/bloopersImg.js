gsap.registerPlugin(ScrollTrigger);
 
    const bloopersImg = gsap.utils.toArray(".tournage-bloopers__img");
 
    gsap.fromTo(bloopersImg,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: "#tournageBloopers",
                start: "top 40%"
            }
        }
    );