function setDough(value) {
    var importProduct = new ImportProduct(arrayProductByJson);
    pizza.dough = importProduct.getDoughByName(value);
    document.getElementById("info-pizza").innerHTML = `<p>Price: ${pizza.price}BYN</p><p>Calories: ${pizza.calories}kal</p><p>Weight: ${pizza.weight}g</p>`;
    addImgPizzaComponent("dough");
}
var arraySelectProduct = [];
function AddProduct(value) {
    var importProduct = new ImportProduct(arrayProductByJson);

    if (document.getElementById(value).checked) { //if the product is selected, add it to the array and display it

        arraySelectProduct.push(importProduct.getIngredientByName(value));
        pizza.product = arraySelectProduct;
        addImgPizzaComponent(value, importProduct.getIngredientByName(value).type);
    }
    else { //if the selection is canceled, delete the image and the array element
        pizza.delIngredient(value);
        delImgPizzaComponent(value);
    }
    //displaying the price and calories of the finished pizza with a margin
    document.getElementById("info-pizza").innerHTML = `<p>Price: ${pizza.price}BYN</p><p>Calories: ${pizza.calories}kal</p><p>Weight: ${pizza.weight}g</p>`;
}
