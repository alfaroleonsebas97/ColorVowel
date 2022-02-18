

function populateSelect() {
    var dropdown = document.getElementById('subjects');
    for (var i = 0; i < subjects.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        dropdown.innerHTML = dropdown.innerHTML +
            '<option value="' + subjects[i]['ID'] + '">' + subjects[i]['Subject_Name'] + '</option>';
    }
}

populateSelect();