import { useCallback, useEffect, useState } from "react";
import './css/Ingredient.css';

const RecipeDetails = ({recipe}) => {
    //const [displayStyle, setDisplayStyle] = useState(recipe.displayStyle)
    //console.log(recipe.displayStyle)
    //const [displayStyle, setDisplayStyle] = useState()
    //const totalNumberOfServings = useState(recipe.totalNumberOfServings)//recipe.totalNumberOfServings
    //const displayStyle = getDisplayStyle()
    //console.log(displayStyle)
    //console.log(recipe.totalNumberOfServings)

    const totalGrams = calculateMacroTotal("gramsPerServing")
    const totalCalories = calculateMacroTotal("caloriesPerServing")
    const totalFat = calculateMacroTotal("totalFatPerServing")
    const totalSaturatedFat = calculateMacroTotal("saturatedFatPerServing")
    const totalTransFat = calculateMacroTotal("transFatPerServing")
    const totalCholesterol = calculateMacroTotal("cholesterolPerServing")
    const totalSodium = calculateMacroTotal("sodiumPerServing")
    const totalCarbs = calculateMacroTotal("totalCarbsPerServing")
    const totalFiber = calculateMacroTotal("fiberPerServing")
    const totalSugars = calculateMacroTotal("totalSugarsPerServing")
    const totalAddedSugars = calculateMacroTotal("totalAddedSugarsPerServing")
    const totalProtein = calculateMacroTotal("proteinPerServing")

    //These don't reset
    //To fix, tie these variables to the recipe
    //All the other variables are tied to the selected recipe
    //These variables are tied to this React component
    //The other variables are passed in
    //if recipe != newlySelectedRecipe reset these variables
    const [gramsConsumed, setGramsConsumed] = useState(0)
    const [servingsConsumed, setServingsConsumed] = useState(0)

    const [caloriesConsumed, setCaloriesConsumed] = useState(0)
    const [fatConsumed, setFatConsumed] = useState(0)
    const [saturatedFatConsumed, setSaturatedFatConsumed] = useState(0)
    const [transFatConsumed, setTransFatConsumed] = useState(0)
    const [cholesterolConsumed, setCholesterolConsumed] = useState(0)
    const [sodiumConsumed, setSodiumConsumed] = useState(0)
    const [carbsConsumed, setCarbsConsumed] = useState(0)
    const [fiberConsumed, setFiberConsumed] = useState(0)
    const [sugarsConsumed, setSugarsConsumed] = useState(0)
    const [addedSugarsConsumed, setAddedSugarsConsumed] = useState(0)
    const [proteinConsumed, setProteinConsumed] = useState(0)

    const displayMacrosPerGram = useCallback(() => {
        let percentConsumed = gramsConsumed / totalGrams
        setCaloriesConsumed(totalCalories * percentConsumed)
        setFatConsumed(totalFat * percentConsumed)
        setSaturatedFatConsumed(totalSaturatedFat * percentConsumed)
        setTransFatConsumed(totalTransFat * percentConsumed)
        setCholesterolConsumed(totalCholesterol * percentConsumed)
        setSodiumConsumed(totalSodium * percentConsumed)
        setCarbsConsumed(totalCarbs * percentConsumed)
        setFiberConsumed(totalFiber * percentConsumed)
        setSugarsConsumed(totalSugars * percentConsumed)
        setAddedSugarsConsumed(totalAddedSugars * percentConsumed)
        setProteinConsumed(totalProtein * percentConsumed)
    }, [gramsConsumed, totalAddedSugars, totalCalories, totalCarbs, totalCholesterol, totalFat, totalFiber, totalGrams, totalProtein, totalSaturatedFat, totalSodium, totalSugars, totalTransFat])

    /*
    //consumed / total
    const displayMacrosPerServing = useCallback(() => {
        let percentConsumed = servingsConsumed / totalNumberOfServings
        setCaloriesConsumed(totalCalories * percentConsumed)
        setFatConsumed(totalFat * percentConsumed)
        setSaturatedFatConsumed(totalSaturatedFat * percentConsumed)
        setTransFatConsumed(totalTransFat * percentConsumed)
        setCholesterolConsumed(totalCholesterol * percentConsumed)
        setSodiumConsumed(totalSodium * percentConsumed)
        setCarbsConsumed(totalCarbs * percentConsumed)
        setFiberConsumed(totalFiber * percentConsumed)
        setSugarsConsumed(totalSugars * percentConsumed)
        setAddedSugarsConsumed(totalAddedSugars * percentConsumed)
        setProteinConsumed(totalProtein * percentConsumed)
    }, [gramsConsumed, totalAddedSugars, totalCalories, totalCarbs, totalCholesterol, totalFat, totalFiber, totalGrams, totalProtein, totalSaturatedFat, totalSodium, totalSugars, totalTransFat])
    */
   
    //TODO
    //If totalGrams <= 0 we will output NaN. We don't want this.

    //Also, upon selecting different recipes the 'Servings in Grams' field
    //Does not reset to 0. That's lame
    //But, when a new ingredient is added it does seem to reset
    //When grams are 0....
    //Idk, but something to investigate to gain this effect

    //Setting displayStyle outside of useEffect doesn't seem to work
    useEffect(() => {
        let percentConsumed = gramsConsumed / totalGrams
        if(recipe.displayStyle === "perServing"){
            percentConsumed = servingsConsumed / recipe.totalNumberOfServings
        }

        setCaloriesConsumed(Math.round(totalCalories * percentConsumed))
        setFatConsumed(Math.round(totalFat * percentConsumed))
        setSaturatedFatConsumed(Math.round(totalSaturatedFat * percentConsumed))
        setTransFatConsumed(Math.round(totalTransFat * percentConsumed))
        setCholesterolConsumed(Math.round(totalCholesterol * percentConsumed))
        setSodiumConsumed(Math.round(totalSodium * percentConsumed))
        setCarbsConsumed(Math.round(totalCarbs * percentConsumed))
        setFiberConsumed(Math.round(totalFiber * percentConsumed))
        setSugarsConsumed(Math.round(totalSugars * percentConsumed))
        setAddedSugarsConsumed(Math.round(totalAddedSugars * percentConsumed))
        setProteinConsumed(Math.round(totalProtein * percentConsumed))
        /*
        setDisplayStyle(recipe.displayStyle)
        if(recipe.ingredients.length < 1 || totalGrams <= 0 || totalNumberOfServings <= 0){
            displayDefaultMacros()
        }else if(displayStyle === "perServing"){
            displayMacrosPerServing()
        }else{
            displayMacrosPerGram()
        }
        */
    })//, [totalGrams, gramsConsumed, displayMacrosPerGram, recipe.ingredients.length])

    function calculateMacroTotal(macro){
        //console.log(macro)
        let macroTotal = 0
        recipe.ingredients.forEach(ingredient => {
            //console.log(ingredient[macro])
            macroTotal += ingredient[macro] * ingredient.numberOfContainers * ingredient.servingsPerContainer
        })
        //console.log(macroTotal)
        return macroTotal
    }

    function getDisplayStyle(){
        return recipe.displayStyle
    }

    function displayDefaultMacros(){
        setCaloriesConsumed("Add Ingredients!")
        setFatConsumed("Add Ingredients!")
        setSaturatedFatConsumed("Add Ingredients!")
        setTransFatConsumed("Add Ingredients!")
        setCholesterolConsumed("Add Ingredients!")
        setSodiumConsumed("Add Ingredients!")
        setCarbsConsumed("Add Ingredients!")
        setFiberConsumed("Add Ingredients!")
        setSugarsConsumed("Add Ingredients!")
        setAddedSugarsConsumed("Add Ingredients!")
        setProteinConsumed("Add Ingredients!")
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h2>{recipe.name}</h2>
                        </th>
                    </tr>

                    {recipe.displayStyle === "perGram" ?
                        <div>
                            <tr>
                                <td>
                                    <h4>Total Grams: {totalGrams}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Grams Consumed : 
                                    <input
                                        type="number"
                                        required
                                        value={gramsConsumed}
                                        onChange={(e) => setGramsConsumed(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </div>
                    :
                        <div>
                            <tr>
                                <td>
                                    <h4>Total Servings: {recipe.totalNumberOfServings}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Servings Consumed: 
                                    <input
                                        type="number"
                                        required
                                        value={servingsConsumed}
                                        onChange={(e) => setServingsConsumed(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </div>
                    }
                    
                    <tr>
                        <td>
                            <label>
                                -----------------------------------------------
                            </label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr bgcolor="aqua">
                        <td>
                            <label>
                                Calories :
                            </label>
                        </td>
                        <td>
                            {caloriesConsumed}
                        </td>
                    </tr>
                    <tr bgcolor="violet">
                        <td>
                            <label>
                                Total Fat :
                            </label>
                        </td>
                        <td>
                            {fatConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Saturated Fat :
                            </label>
                        </td>
                        <td>
                            {saturatedFatConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Trans Fat :
                            </label>
                        </td>
                        <td>
                            {transFatConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Cholesterol :
                            </label>
                        </td>
                        <td>
                            {cholesterolConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sodium :
                            </label>
                        </td>
                        <td>
                            {sodiumConsumed}
                        </td>
                    </tr>
                    <tr bgcolor="SpringGreen">
                        <td>
                            <label>
                                Carbs :
                            </label>
                        </td>
                        <td>
                            {carbsConsumed}
                        </td>
                    </tr>
                    <tr bgcolor="SeaShell">
                        <td>
                            <label>
                                Fiber :
                            </label>
                        </td>
                        <td>
                            {fiberConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sugars :
                            </label>
                        </td>
                        <td>
                            {sugarsConsumed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Total Added Sugars :
                            </label>
                        </td>
                        <td>
                            {addedSugarsConsumed}
                        </td>
                    </tr>
                    <tr bgcolor="Salmon">
                        <td>
                            <label>
                                Protein :
                            </label>
                        </td>
                        <td>
                            {proteinConsumed}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>Notes</h3>
            <p>
                {recipe.notes}
            </p>
            <h3>URL</h3>
            {recipe.url}
        </div>
    )
}

export default RecipeDetails