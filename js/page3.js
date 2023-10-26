document.getElementById("show-date-button").addEventListener("click", function() {
    var selectedDate = document.getElementById("date-input").value;
    document.getElementById("selected-date").textContent = "Fecha seleccionada: " + selectedDate;
  });
   