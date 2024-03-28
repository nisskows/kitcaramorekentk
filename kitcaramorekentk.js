import { kitcaramorekentk} from '@nisskows/proxy';   
import { kitcaramorekentk} from '@nisskows/sleep';
// event_booking_system.js

// recipe_management_system.js

class Recipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

class RecipeManagementSystem {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
        console.log(`Recipe "${recipe.name}" added successfully.`);
    }

    viewRecipe(name) {
        const recipe = this.recipes.find(recipe => recipe.name === name);
        if (recipe) {
            console.log(`Recipe: ${recipe.name}`);
            console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
            console.log(`Instructions: ${recipe.instructions}`);
        } else {
            console.log(`Recipe "${name}" not found.`);
        }
    }

    searchRecipes(query) {
        const matchingRecipes = this.recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(`Matching recipes for "${query}":`);
        matchingRecipes.forEach(recipe => console.log(recipe.name));
    }
}

// Example usage
const recipeSystem = new RecipeManagementSystem();
recipeSystem.addRecipe(new Recipe('Pasta Carbonara', ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan Cheese'], '1. Cook spaghetti. 2. Fry bacon. 3. Mix eggs and cheese. 4. Combine all ingredients.'));
recipeSystem.addRecipe(new Recipe('Vegetable Stir-fry', ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce'], '1. Chop vegetables. 2. Stir-fry with soy sauce.'));
recipeSystem.viewRecipe('Pasta Carbonara');
recipeSystem.searchRecipes('pasta');


