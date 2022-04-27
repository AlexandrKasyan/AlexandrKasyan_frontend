 class Pizza{
    #dough = new Dough();
    #product = new Product();
    
    constructor(dough, product){
        this.#dough = dough;
        this.#product = product;
    }
    
    get price(){//receiving and calculating the cost of a ready-made pizza with a margin
        let sum = 0; 
        for (let i=0; i< this.#product.length; i++){
            sum += this.#product[i].cost;
        }
        sum += this.#dough.cost;

        if (sum < 10){
            return sum * 0.2 + sum
        }
        else if (sum >10 && sum <= 15){
            return sum * 0.15 + sum
        }
        else{
            return sum * 0.1 + sum
        }
    }

    get calories(){//counting calories
        let calories = 0; 
        for (let i=0; i< this.#product.length; i++){
            calories += this.#product[i].calories;
        }
        calories += this.#dough.calories;

        return calories; 
    }

    get weight(){ //getting and calculating weight
        let weight = 0; 
        for (let i=0; i< this.#product.length; i++){
            weight += this.#product[i].weight;
        }
        weight += this.#dough.weight;

        return weight; 
    }

    get dough(){//getting the dough
        return this.#dough;
    }
    get product(){//getting the product
        return this.#product;
    }

    /**
     * @param {any} value
     */
    set dough(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect value')
        }
        this.#dough = value;
    }
    /**
     * @param {any} value
     */

    set product(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect value')
        }
        this.#product = value;
    }

    delIngredient(value){//removing an ingredient
        if (value === '' || value === undefined){
            throw new Error('Incorrect name product')
        }
        for (let i=0; i< this.#product.length; i++){
            if(this.#product[i].name == value){
                this.#product.splice(i,1);
            }
        }
    }

    toJSON(){
        return JSON.stringify({
            'dough' : this.#dough,
            'products' : this.#product,
        })
    }

}

