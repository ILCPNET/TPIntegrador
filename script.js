
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('Categoria');
let totalPagar = document.getElementById('totalAPagar');
let btnResumen = document.getElementById('btnResumen');

const valorTicket = 200;
const estudiante = 0.80;
const trainee = 0.50;
const junior = 0.15;

function calculoPago() {
    event.preventDefault();
    let total = cantidad.value * valorTicket;
    switch (categoria.value) {
        case "Estudiante":
            total = total - (total * estudiante);
            break;
        case "Trainee":
            total = total - (total * trainee);
            break;
        case "Junior":
            total = total - (total * junior);
            break;
        default:
            break;
    }
    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}
