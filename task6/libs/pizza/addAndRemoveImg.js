function addImgPizzaComponent(value, type) {
    let img = document.createElement("img");
    img.src = `img/${value}.png`;
    img.setAttribute("onerror", "this.style.display = 'none'"); //if there is no picture, there is no error
    img.setAttribute("id", "img-" + value);
    if (value == "dough")
        img.style.zIndex = 0;
    if (type == "sauce")
        img.style.zIndex = 1;
    if (type == "ingredient")
        img.style.zIndex = 2;
    if (type == "seasonings")
        img.style.zIndex = 3;
    document.getElementById("pizza-img").appendChild(img);
}
function delImgPizzaComponent(value) {
    document.getElementById("img-" + value).remove();
}
