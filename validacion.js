//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("input");


inputs.forEach(input => {
    input.addEventListener("blur", () => { 
        validarInputs(input)
     })
})


const validarInputs = (input) => {
    if (input.validity.valid) {
        //si el validity del input es true seleccionamos el span del error y lo ocultamos
        const mensajeDeError = input.parentElement.querySelector(".formcontato__mensaje--error");
        mensajeDeError.style.display = "none"
        //quitamos la clase que denota el error y colocamos la normal
        input.classList.remove("formcontato__input--error");
        input.classList.add("formcontato__input");
    } else {
        //si el validity del input es false hacemos que aparezca el span de error
        const mensajeDeError = input.parentElement.querySelector(".formcontato__mensaje--error");
        mensajeDeError.style.display = "block";
        //cambiamos la clase del input para que use la del error
        input.classList.add("formcontato__input--error");
        input.classList.remove("formcontato__input");

    }
}
