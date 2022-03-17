"use strict";

function populateSelect() {
  var dropdown = document.getElementById("subjects");
  for (var i = 0; i < subjects.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    dropdown.innerHTML =
      dropdown.innerHTML +
      '<option value="' +
      subjects[i]["ID"] +
      '">' +
      subjects[i]["Subject_Name"] +
      "</option>";
  }
}

function main() {
  populateSelect();

  $('[lang="es"]').hide();  
  $(".switch-lang").click(function () {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
  });
}

window.addEventListener("load", main);
