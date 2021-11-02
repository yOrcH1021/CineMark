
const url = "https://yorch1021.github.io/CineMark/assets/js/datos.json"

$("main > div").prepend('<div class="d-flex justify-content-center"><button class="btn mt-5">Ver Cartelera</button></div>');
//Escuchamos el evento click del botón agregado
$(".btn").click(() => { 
    $.getJSON(url, function (answer, state) {
        if(state === "success"){
        let misDatos = answer;
        for (const dato of misDatos) {
            $("main > ul").prepend(`<li>
                                <a href="${dato.url}" class="d-flex flex-column">
                                    <img src="${dato.img}">
                                    <p class="m-0">${dato.date}</p>
                                    <h4 class="m-0">${dato.name}</h4>
                                </a>
                            </li>`)
            }  
        }
    });
    $("main > div").addClass("d-none");
});

$.getJSON(url, function (answer, state) {
    if(state === "success"){
    let misDatos = answer;
    for (const dato of misDatos) {
        $("#movieList").prepend(`<li>
                            <a href="${dato.url}" class="d-flex flex-column">
                                <img src="${dato.img}">
                                <p class="m-0">${dato.date}</p>
                                <h4 class="m-0">${dato.name}</h4>
                            </a>
                        </li>`)
        }  
    }
});
