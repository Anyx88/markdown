const claveCorrecta = "1234";
const claveIngresada = "1234";

if (claveIngresada === claveCorrecta) {
    console.log("Acceso concedido. Bienvenido.");
} else {
    console.log("Clave incorrecta. Intenta de nuevo.");
}

const estadoCuenta = "inactiva";

if (estadoCuenta !== "activa") {
    console.log("Tu cuenta está bloqueada o inactiva.");
} else {
    console.log("Tu cuenta funciona con normalidad.");
}
