import React, { useState } from 'react'

const App = () => {
    //Recipe variables
    const [recipeName, setRecipeName] = useState('')

    //Recipes have multiple ingredients
    //Ingredient variables below
    //Variables to do match
    const [ingredientName, setIngredientName] = useState([])
    const [numberOfContainers, setNumberOfContainers] = useState([])
    const [servingsPerContainer, setservingsPerContainer] = useState([])
    //Variables for macros
    const [caloriesPerServing, setCaloriesPerServing] = useState([])
    const [totalFatPerServing, settotalFatPerServing] = useState([])
    const [saturatedFatPerServing, setSaturatedFatPerServing] = useState([])
    const [transFatPerServing, setTransFatPerServing] = useState([])
    const [cholesterolPerServing, setCholesterolPerServing] = useState([])
    const [sodiumPerServing, setSodiumPerServing] = useState([])
    const [totalCarbsPerServing, setTotalCarbsPerServing] = useState([])
    const [fiberPerServing, setFiberPerServing] = useState([])
    const [totalSugarsPerServing, setTotalSugarsPerServing] = useState([])
    const [totalAddedSugarsPerServing, setTotalAddedSugarsPerServing] = useState([])
    const [proteinPerServing, setProteinPerServing] = useState([])
    //Create dynamic fields to add micronutriants
    //"Click + or - to add and remove extra fields"
    const [vitaminBPerServing, setVitaminBPerServing] = useState([])
    //Ingredient Output
    //Total macros per ingredient
    //useState probably not required? User can't interact with these
    const [caloriesPerIngredient, setCaloriesPerIngredient] = calculateTotalIngredientMacros(caloriesPerServing)
    const [totalFatPerIngredient, setTotalFatPerIngredient] = calculateTotalIngredientMacros(totalFatPerServing)
    const [saturatedFatPerIngredient, setSaturatedFatPerIngredient] = calculateTotalIngredientMacros(saturatedFatPerServing)
    const [transFatPerIngredient, setTransFatPerIngredient] = calculateTotalIngredientMacros(transFatPerServing)
    const [cholesterolPerIngredient, setCholesterolPerIngredient] = calculateTotalIngredientMacros(cholesterolPerServing)
    const [sodiumPerIngredient, setSodiumPerIngredient] = calculateTotalIngredientMacros(sodiumPerServing)
    const [totalCarbsPerIngredient, setTotalCarbsPerIngredient] = calculateTotalIngredientMacros(totalCarbsPerServing)
    const [fiberPerIngredient, setFiberPerIngredient] = calculateTotalIngredientMacros(fiberPerServing)
    const [totalSugarsPerIngredient, setTotalSugarsPerIngredient] = calculateTotalIngredientMacros(totalSugarsPerServing)
    const [totalAddedSugarsPerIngredient, setTotalAddedSugarsPerIngredient] = calculateTotalIngredientMacros(totalAddedSugarsPerServing)
    const [proteinPerIngredient, setProteinPerIngredient] = calculateTotalIngredientMacros(proteinPerServing)
    //Total macros for all ingredients
    const [totalGrams, setTotalGrams] = useState([])
    const [totalCalories, setCalories] = useState([])
    const [totalMacrosList, settotalMacrosList] = useState([])

    function calculateTotalIngredientMacros(macro){
        return numberOfContainers * servingsPerContainer * macro
    }

    //e is short for the event object

    return(
        <div>
            <h2>Recipe Macros</h2>
            <form>
                <label>Recipe Name: </label>
                <input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />
                <p>{recipeName}</p>
            </form>
        </div>
    );
}

export default App;