gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".distribution__item");

gsap.fromTo(cards,
    {
        y: 100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 5,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#distribution",
            start: "top 45%",
        }
    }
);