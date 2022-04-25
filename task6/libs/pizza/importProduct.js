 class ImportProduct{//a class for getting pizza components
     arrayProduct = [];
    
    constructor(arrayProduct){
       this.arrayProduct= arrayProduct; 
    }
    
    get doughInfo(){ //getting information about doughs
        let dough = [];
        for(let i=0; i<this.arrayProduct.dough.length; i++)
        {
            dough.push({
                name : this.arrayProduct.dough[i].name,
                calories : this.arrayProduct.dough[i].calories,
                cost : this.arrayProduct.dough[i].cost
            }); 
        }   
        return dough;
    }

    get productsInfo(){  // getting information about product
        let products = [];
        for(let i=0; i<this.arrayProduct.products.length; i++)
        {
            products.push({
                name : this.arrayProduct.products[i].name,
                calories : this.arrayProduct.products[i].calories,
                cost : this.arrayProduct.products[i].cost,
                type : this.arrayProduct.products[i].type
            }); 
        }   
        return products;

    }

    getIngredientByName(nameProduct){ //getting detailed information about product
        for(let i = 0; i<this.arrayProduct.products.length; i++){
            if(this.arrayProduct.products[i].name==nameProduct)
            {
                return this.arrayProduct.products[i];
            }
        }
    }

    getDoughByName(nameDough){ //getting detailed information about dough
        for(let i = 0; i<this.arrayProduct.dough.length; i++){
            if(this.arrayProduct.dough[i].name==nameDough)
            {
                return this.arrayProduct.dough[i];
            }
        }
    }
    
}