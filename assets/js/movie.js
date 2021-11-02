const valorBoleta = 8000
const valorBoleta3D = 16000
const promotion = 4000
const promotion3D = 8000

let total = ""

class movie {
    constructor(tituloOriginal, tituloLocal, estreno, duracion, sinopsis, pais, elenco, director) {
        this.originalTitle = tituloOriginal;
        this.localTitle = tituloLocal;
        this.year = estreno;
        this.duration = duracion;
        this.synopsis = sinopsis;
        this.country = pais;
        this.cast = elenco;
        this.director = director;
    }
}

function day() {
    let buttonDay = $(".days button")
    buttonDay.click(function() {
        buttonDay.removeClass("active");
        $(this).addClass("active");
        let textBtn = $(this).text();
        console.log(textBtn);

        $('.theaters').removeClass('d-none');

        if ($(this).prop("id") == "button1" || $(this).prop("id") == "button2"){
            console.log('hay Promoción');
            $('.promotionText').removeClass('d-none')
        }
        else {
            $('.promotionText').addClass('d-none')
            console.log('No hay Promoción');
        }

        $('#day').append(textBtn);

    });

    let buttonFormat = $(".format button")
    buttonFormat.click(function() {
        buttonFormat.removeClass("active");
        $(this).addClass("active");
        $('input').removeClass('d-none');

        if ($(this).prop("id") == "2D"){
            console.log('2D');
            $('#format').append('2D');
        } else if ($(this).prop("id") == "3D") {
            console.log('3D');
            $('#format').append('3D');
        }


    });

    $('.buy').click(function(){
        let inputField = $('.numberEntries').val();
        console.log(inputField);

        if ($('.days button#button1').hasClass('active') || $('.days button#button2').hasClass('active')) {
            console.log('Es Promoción por ser lunes o martes');
            if ($(".format button#2D").hasClass('active')) {
                console.log(promotion * inputField);
                $('#total').append(promotion * inputField);
            }
            else if ($(".format button#3D").hasClass('active')) {
                console.log(promotion3D * inputField);
                $('#total').append(promotion3D * inputField);
            }
        } else {
            console.log('No hay Promoción, se paga igual');
            if ($(".format button#2D").hasClass('active')) {
                console.log(valorBoleta * inputField);
                $('#total').append(valorBoleta * inputField);
            }
            else if ($(".format button#3D").hasClass('active')) {
                console.log(valorBoleta3D * inputField);
                $('#total').append(valorBoleta3D * inputField);
            }
        }

        $('#numberOfEntries').append(inputField);

        $('.before').fadeOut("slow", function(){
            $('.after').fadeIn()
        });

        $('.congratulations').delay(2000).animate({  zoom:'1.5' }, 5000, function() {});;
        
    });
    
}

day();
