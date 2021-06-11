// <!-- Side menu toggle -->
$('#menu-toggle').click(function (e) {
    e.preventDefault();
    $('#wrapper').toggleClass('menuDisplayed');
});

// <!-- Dark mode toggle -->

function darkMode() {
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


// When the user scrolls the page, execute ProgressFunction
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

window.onload = function (a) {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: ""
        },
        axisX: {
            margin: 10,
            labelPlacement: "inside",
            tickPlacement: "inside"
        },
        axisY2: {
            title: "Navigation Rating",
            titleFontSize: 14,
            includeZero: true,
            suffix: ""
        },
        data: [{
            type: "bar",
            axisYType: "secondary",
            yValueFormatString: "#,###.##",
            indexLabel: "{y}",
            dataPoints: [{
                    label: "RottenTomatoes",
                    y: 8.25
                },
                {
                    label: "IMDb",
                    y: 7.75
                },
                {
                    label: "Flixster",
                    y: 5.5
                },
                {
                    label: "Mrqe",
                    y: 4.75
                },
                {
                    label: "Rogerebert",
                    y: 5.25
                },
                {
                    label: "Metacritic",
                    y: 8.25
                },
                {
                    label: "Letterboxd",
                    y: 4.25
                },
                {
                    label: "Fandango",
                    y: 8
                },
                {
                    label: "Themoviedb",
                    y: 7
                },
                {
                    label: "Allmovie",
                    y: 5.75
                }
            ]
        }]
    });
    chart.render();

}

var prev_handler = window.onload;
window.onload = function (b) {
    if (prev_handler) {
        prev_handler();
    }

    var chart = new CanvasJS.Chart("chartContainer2", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "Final ratings"
        }],
        axisX: {
            title: "Aspects"
        },
        axisY: {
            title: "",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true
        },
        axisY2: {
            title: "",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Highest rated site",
                showInLegend: true,
                yValueFormatString: "#0.#",
                dataPoints: [{
                        label: "Purpose of the site",
                        y: 9.5
                    },
                    {
                        label: "Content Utility",
                        y: 9
                    },
                    {
                        label: "Organisation",
                        y: 8
                    },
                    {
                        label: "Graphical Representation",
                        y: 9
                    },
                    {
                        label: "Navigation",
                        y: 8.1
                    }
                ]
            },
            {
                type: "column",
                name: "Project site",
                axisYType: "secondary",
                showInLegend: true,
                yValueFormatString: "#0.#",
                dataPoints: [{
                        label: "Purpose of the site",
                        y: 9
                    },
                    {
                        label: "Content Utility",
                        y: 8.5
                    },
                    {
                        label: "Organisation",
                        y: 9
                    },
                    {
                        label: "Graphical Representation",
                        y: 8.5
                    },
                    {
                        label: "Navigation",
                        y: 7.5
                    }
                ]
            }
        ]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart2.render();
    }

}