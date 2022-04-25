
var pizza = new Pizza();//pizza class object
pizza.dough = new Dough();
pizza.product = new Product();


var arrayProductByJson = [];
function getProductsByJson(){//getting all pizza ingredients from a JSON file
    fetch('./libs/product.json') // query string
        .then(response => response.json())
        .then(response => {
            arrayProductByJson = response; //adding a list of products to an array
            logic();//starting the logic only after loading the json
        })
        .catch(err => {
            console.log(err);
            alert("Нет подключения к интернету или исчезла ссылка");
        });
}

function orderPizza() {//Sending data to the server

   const pizzaJSON = pizza.toJSON();
   console.log(pizzaJSON);
   fetch('http://localhost:3000/order', {
        method: 'POST',
        body: pizzaJSON,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(result => result.json())
        .then(result => {
            alert('Your order is accepted')
        })
        .catch(error => {
            console.log(`Error: ${error.message}`)
            alert(`Error: ${error.message}`)
        })
}


function logic(){
    var importProduct = new ImportProduct(arrayProductByJson);
    setDough(arrayProductByJson.dough[0].name); //default dough
    AddListDough("select-dough", importProduct.doughInfo); //adding a list of all pizza dough
    AddListProduct(importProduct.productsInfo); //adding a list of all pizza toppings products
}



