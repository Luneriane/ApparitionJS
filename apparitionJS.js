function myFunction() {
    document.getElementById("menuA").style.color = "red";
}


function animMenu() {
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
}