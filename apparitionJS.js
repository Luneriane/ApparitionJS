function myAnim(menuX) {
    var letter = menuX.charAt(4),
        mySection = "section" + letter;

        console.log(mySection);

    TweenMax.to(menuX, 2, {
        width: "100%",
        height: "100%",
        zIndex: 4,
        opacity: 1
    });
    TweenMax.to(menuX, 2, {
        opacity: 0,
        ease:Power4.easeInOut, 
        delay: 2
    });
    TweenMax.to(mySection, 2, {
        display: "block",
        opacity: 0,
        delay: 2
    });
    TweenMax.to(mySection, 2, {
        opacity: 1,
        ease:Power4.easeInOut,
        delay: 2
    });
}


/*function animMenu() {
    0% {
        menu {
            width: 50%;
            height: 50%;
            z-index: 3;
        }
    }
    75% {
        menu {
            width: 100%;
            height: 100%;
            z-index: 4;
        }
        section {
            display: block;
            z-index: 5
        }
    }
    100% {
        menu {
            width: 50%;
            height: 50%;
            z-index: 10;
        }
    }
} */