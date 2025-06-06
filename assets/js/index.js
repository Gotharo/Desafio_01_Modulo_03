precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let count = 0;

document.querySelector("#btnPlus").addEventListener("click", () => {
    count++;
    document.querySelector(".cantidad").innerHTML = count;
    document.querySelector(".valor-total").innerHTML = count * precio;
});

document.querySelector("#boton-restar").addEventListener("click", () => {
    if (count > 0) {
        count--;
        document.querySelector(".cantidad").innerHTML = count;
        document.querySelector(".valor-total").innerHTML = count * precio;
    }
});