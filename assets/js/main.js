
const url = "https://yorch1021.github.io/CineMark/assets/js/datos.json"

$.getJSON(url, function (answer, state) {
    if(state === "success"){
    let misDatos = answer;
    for (const dato of misDatos) {
        $("#movieList").prepend(`<li>
                            <a href="${dato.url}" class="d-flex flex-column">
                                <div>
                                    <img src="${dato.img}">
                                    <span class="btn">Ver +</span>
                                </div>
                                <p class="m-0">${dato.date}</p>
                                <h4 class="m-0">${dato.name}</h4>
                            </a>
                        </li>`)
        }  
    }
});

$('.moreMovies').click(function() {
    $('#movieList').addClass('allMovies');
    this.remove();
});

$('.navbar-toggler').click(function() {
    $('body').toggleClass('wScroll');
});

// SCROLL TO TOP
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('.toTop').addClass('show');
    } else {
        $('.toTop').removeClass('show');
    }
});

//Click event to scroll to top
$('.toTop').click(function(){
    $(window).scrollTop(0);
});

