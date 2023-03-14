import Ingredient from './Ingredient';
import { useState } from "react";
import './css/Ingredients.css';

const Ingredients = () => {
    const [ingredientList, setIngredientList] = useState([])

    //How do I want the Ingredients Block to function?
    //Click a button to display a new Ingredient Block
    //Enter Ingredient info
    //Have buttons to save the ingredient or remove the component
    //If "Save", add the ingredient to the ingredientList array

    //Could have the new ingredient appear between the "add ingredient" button and
      //list of added ingredients

    //How does the page look now?
    //Page has an "Add New Ingredient" button at the top
    //Window pops up with a new Ingredient component
    //If added, the ingredient is now in a list beneath the "Add New Ingredient" button
    //To the right of the Label of the Ingredient name, there's an edit and delete button
    //And that's it
    //Also need a "Save Ingredients" button.
    
    //First solution I think looks and feels best:
    //Fields to add a new ingredient are always on the left side of the screen
    //Button below the input fields to save the ingredient
    //Once saved, the ingredient appears on a list on the right hand side of the screen
    //That list displays the ingredient name and there is an option to delete it
    //The option to edit is a bit much right now

    //When you save an ingredient, map the ingredient name to its macros

    const handleNewIngredientSubmit = (e) => {
        //By default, the page refreshes onSubmit. This line of code prevents the refresh
        //Actually I might want it to refresh to clear the Ingredient data
        e.preventDefault()
    }

    return(
        <div className="ingredients">
            <form className="flex-child new_ingredient" onSubmit={handleNewIngredientSubmit}>
                <button>Add Ingredient</button>
                <Ingredient/>
            </form>
            <form className="flex-child saved_ingredients">
                <h2>Existing Ingredients Map Here</h2>
            </form>
        </div>
    )
}

export default Ingredients