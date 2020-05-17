// <!-- Side menu toggle -->
$('#menu-toggle').click(function (e) {
    e.preventDefault();
    $('#wrapper').toggleClass('menuDisplayed');
});

// <!-- Dark mode toggle -->

function myFunction() {
    var element = document.querySelector('body');
    element.classList.toggle('dark-mode');
    var elementH2 = document.querySelector('h2');
    elementH2.classList.toggle('h2');
    var elementBoxShadow = document.querySelector('.row-1');
    elementBoxShadow.classList.toggle('box-shadow');
    var elementBoxShadow2 = document.querySelector('.row-2');
    elementBoxShadow2.classList.toggle('box-shadow');
}


// Smooth scroll anchors
document.querySelectorAll('a[href^="#wrapper"], a[href^="#work-more"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});


// <!-- Fade on scroll -->
$(window).scroll(function () {
    $('.about-me').css('opacity', 1 - $(window).scrollTop() / 700);
});


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    ProgressFunction();
};

function ProgressFunction() {
    var winScroll = document.getElementById('content-wrapper').scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
}

// < !--Gallery  -->

function currentDiv(n) {
    showDivs((slideIndex = n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' w3-opacity-off', '');
    }
    x[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' w3-opacity-off';
}

