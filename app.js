const hiden = document.querySelectorAll(".hide1, .hide2, .hide3");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        rootMargin: "100px",
    }
)

hiden.forEach(element => {
    observer.observe(element)
})

var elmntToView = document.getElementById("seconditem");
var arrow = document.querySelector(".arrowwrap");


// obesrveri agar gvinda animaciebi cssshi

var activewrap = 1;
var prevactive = 1;
var endwrap = document.querySelectorAll(".item").length;
var delay = 1;
var burgeractive = 0;

function delayreset() {
    setTimeout(() => {
        delay=1
    }, 1000);
}

function changewrapdown() {
    document.querySelector(`.spy${activewrap}`).classList.add("spyactive");
    document.querySelector(`.spy${activewrap}`).id = 'spylock';
    document.querySelector(`.spy${prevactive}`).classList.remove("spyactive");
    document.querySelector(`.spy${prevactive}`).removeAttribute('id');
    document.querySelector(`.wrap${prevactive}`).classList.remove("active");
    document.querySelector(`.wrap${prevactive}`).classList.add("deactivedown");
    setTimeout(() => {
        document.querySelector(`.wrap${prevactive}`).classList.remove("deactivedown");
        document.querySelector(`.wrap${activewrap}`).classList.add("active");
    }, 1000);
}

function changewrapup() {
    document.querySelector(`.spy${activewrap}`).classList.add("spyactive");
    document.querySelector(`.spy${activewrap}`).id = 'spylock';
    document.querySelector(`.spy${prevactive}`).classList.remove("spyactive");
    document.querySelector(`.spy${prevactive}`).removeAttribute('id');
    document.querySelector(`.wrap${prevactive}`).classList.remove("active");
    document.querySelector(`.wrap${prevactive}`).classList.add("deactiveup");
    setTimeout(() => {
        document.querySelector(`.wrap${prevactive}`).classList.remove("deactiveup");
        document.querySelector(`.wrap${activewrap}`).classList.add("active");
    }, 1000);
}


window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
    if(delay==1 && burgeractive==0) {
        if(activewrap!=1) {
            prevactive = activewrap;
            activewrap--;
            changewrapup();
            delay=0;
            delayreset();
        }
    }
 }
 else if (event.deltaY > 0)
 {
    if(delay==1 && burgeractive==0) {
        if(activewrap!=endwrap) {
            prevactive = activewrap;
            activewrap++;
            changewrapdown();
            delay=0;
            delayreset();
        }
        
    }
 }
});

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

var burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    document.querySelector(`.wrap${activewrap}`).classList.toggle("burgeractive");
    if (burgeractive == 0) {
        document.body.classList.toggle("burgerbody");
        burgeractive = 1;
    } else {
        setTimeout(() => {
            document.body.classList.toggle("burgerbody");
            burgeractive = 0;
        }, 1000);
    }
});


var arrow = document.querySelector('.arrow');

arrow.addEventListener("click", function() {
    if (burgeractive == 0) {
        document.querySelector('.wrap2').classList.add('active');
        document.querySelector(`.wrap1`).classList.remove('active');
        document.querySelector(`.spy2`).classList.add("spyactive");
        document.querySelector(`.spy1`).classList.remove("spyactive");
        activewrap = 2;
        prevactive = 1;
    }
});

var scrollspy = document.querySelectorAll(".circle");
var scrollnum = 1;

for (let i = 1; i < scrollspy.length + 1; i++) {
    document.querySelector(`.spy${i}`).addEventListener("click", function() {
        if (document.querySelector(`.spy${i}`).id != 'spylock') {
            prevactive = activewrap;
            document.querySelector(`.spy${i}`).id = 'spylock';
            document.querySelector(`.spy${i}`).classList.add("spyactive");
            document.querySelector(`.spy${prevactive}`).removeAttribute('id');
            document.querySelector(`.spy${prevactive}`).classList.remove("spyactive");
            document.querySelector(`.wrap${i}`).classList.add('active');
            document.querySelector(`.wrap${prevactive}`).classList.remove('active');
            activewrap = i;
        }
        
    });
}

