const ingredientJson = [
    {
        id: 1,
        name: "Bacon",
        image: "https://www.themealdb.com/images/ingredients/Bacon.png",
        calories: 100
    },
    {
        id: 2,
        name: "egg",
        image: "https://www.themealdb.com/images/ingredients/egg.png",
        calories: 50
    },
    {
        id: 3,
        name: "bagel",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/20090424_Bagels_001.JPG",
        calories: 200
    }
]
const DishRecipeArray = [];

//#region Ingredient Class
class Ingredient{

//#endregion
}




function AddNewIngredient(){
    //#region Create Element Form
    document.getElementById("InputForm").innerHTML = "";
    var FIngredient = document.createElement("form");
    FIngredient.innerHTML = "<label for='Fname'>Ingredient Name:</label><br>"
    FIngredient.innerHTML += "<input type='text' id=IngredientName><br>";
    FIngredient.innerHTML += "<label for='Fname'>Ingredient Image (url):</label><br>"
    FIngredient.innerHTML += "<input type='text' id=IngredientImageUrl><br>";
    FIngredient.innerHTML += "<label for='Fname'>Ingredient Calories:</label><br>"
    FIngredient.innerHTML += "<input type='text' id=IngredientCalories><br>";
    //#endregion
    //#region Create Button
    FIngredient.innerHTML += "<button onclick='CreateIngredient()'>Create Ingredient</button>";
    FIngredient.innerHTML += "<button onclick='Close()'>Close</button>";
    document.getElementById("InputForm").append(FIngredient);
    //#endregion
}
function CreateIngredient(){
    const IngredientNameValue = document.getElementById('IngredientName').value;
    const IngredientImageValue = document.getElementById('IngredientImageUrl').value;
    const IngredientCaloriesValue = document.getElementById('IngredientCalories').value;
    const IngredientCount = ingredientsjson.length+1;
    var obj = new Ingredient(IngredientCount, IngredientNameValue, IngredientImageValue, IngredientCaloriesValue);
    ingredientsjson.push((obj)); 
    console.log("work");
}


//function init(){
    //let ingredientObj = new Ingredient(1, "Egg","https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs.jpg", 80);
    //ingredientsjson.push(ingredientObj);
    //let dishrecipeObj = new DishRecipe("Pad Tahi", ingredientObj, 100, "salt",300);
    //DishRecipeArray.push(dishrecipeObj);
        
//}