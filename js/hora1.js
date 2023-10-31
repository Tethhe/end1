function actualizarFechaHora() {
  const fechaHoraElement = document.getElementById("fecha-hora");
  const ahora = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const fechaHoraFormateada = ahora.toLocaleDateString("es-ES", opciones);
  fechaHoraElement.textContent = fechaHoraFormateada;
}
setInterval(actualizarFechaHora, 1000); // Actualizar cada segundo
actualizarFechaHora();
