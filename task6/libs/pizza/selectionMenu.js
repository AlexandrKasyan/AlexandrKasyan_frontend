function AddListDough(selectId, objArray) {
    var select = document.getElementById(selectId); //selecting the item to insert the list into
    for (var i = 0; i < objArray.length; i++) {
        var opt = objArray[i].name + " " + objArray[i].cost + "BYN, " + objArray[i].calories + "kal";
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = objArray[i].name;
        select.appendChild(el);
    }
}
function AddListProduct(objArray) {
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].type == "sauce") {
            insertDataProduct(objArray[i]);
        }

        if (objArray[i].type == "ingredient") {
            insertDataProduct(objArray[i]);
        }

        if (objArray[i].type == "seasonings") {
            insertDataProduct(objArray[i]);
        }

    }
}
function insertDataProduct(objArray) {
    document.getElementById(objArray.type).innerHTML += `
        <p>
            <input type="checkbox" value="${objArray.name}" onchange="AddProduct(this.value)" id="${objArray.name}">
            <label class="" for="${objArray.name}">${objArray.name}</label>
            <label class="" for="${objArray.name}">${objArray.cost}BYN ${objArray.calories}kal</label>
        </p>`;
}
