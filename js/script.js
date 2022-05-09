var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) insertNewRecord(formData);
        else updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["book_id"] = document.getElementById("book_id").value;
    formData["book_name"] = document.getElementById("book_name").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.book_id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.book_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("book_id").value = "";
    document.getElementById("book_name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("book_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("book_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.book_id;
    selectedRow.cells[1].innerHTML = formData.book_name;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm("Are you sure to delete this record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("book_id").value == "") {
        isValid = false;
        document.getElementById("book_idValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("book_idValidationError").classList.contains("hide")) document.getElementById("book_idValidationError").classList.add("hide");
    }
    return isValid;
}
