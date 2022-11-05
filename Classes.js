class DishRecipe{
    constructor(name, Ingredients, time, cookingmethod, image){
        this.name = name;
        this.Ingredients = Ingredients;
        this.time = time;
        this.cookingmethod = cookingmethod;
        this.image = image;
    }

    RenderDish(){
        let totalCalories = this.getTotalCalories(this.Ingredients);
        //#region Create Element
        //
        return (`<div class="col-md-4 dishRecipe">  
        <h2>Dish Recipe details:</h2>
        <img src="${this.image}" alt="${this.name}">            
        <h3>${this.name}</h3>            
        <h4>Cooking Method: <span>${this.cookingmethod}</span></h4>
        <h4>Total Cooking Time: <span>${this.time}</span></h4>
        <h4>Calories: <span>${totalCalories}</span> </h4><br/>
        <button id="${this.name}" onclick="getIngredients(this.id)" class="ShowIngredients">Show Ingredients</button>
        </div>`);
        //#endregion
        }

    getTotalCalories(Ingredients){
        let totalCalories = 0;
        Ingredients.forEach(ingredient => {
            totalCalories += parseInt(ingredient.calories);
        });
        return totalCalories;
    }
}

class Ingredients{
    constructor(id, name, image, calories){
        this.id = id;
        this.name = name;
        this.image = image;
        this.calories = calories;
    }
    RenderIngredient(){       
        return `<div id="item ${this.id}">
        <p>ingredient details:</p>
        <img src="${this.image}" alt="${this.name} picture">
        <span>calories: ${this.calories}</span>
        </div>`;
    }
}
