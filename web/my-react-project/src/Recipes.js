import Ingredients from './Ingredients';
import IngredientsBlock from './IngredientsBlock';
import { useEffect, useState } from "react";

//npx start   Starts the current npx folder project on port 3000
  //Run the below command in a seperate command line window
//npx json-server --watch data/ingredient.json --port 8000
//Ctrl + C to stop running a service in the CLI
  //This is for both Mac and Windows

const Recipe = () => {
    const [recipeName, setRecipeName] = useState("")

    const [ingredients, setIngredients] = useState(null)

    useEffect(() => {
        fetch('http://localhost:7000/ingredient')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setIngredients(data)
            })
    }, [])

    return(
        <div className="recipes">
            <h2>Recipes Block</h2>
            <Ingredients/>

            <div>
                <h2>Display Ingredients</h2>
                {ingredients && <IngredientsBlock ingredients={ingredients} name="Ingredient List!"/>}
            </div>
        </div>
    )
}

/*
    //const [template, setTemplate] = useState("")

    //json-server fetch code
    ////////////////////////////////////////
    
    const renderIngredients = async () => {
        let uri = 'http://localhost:8000/ingredient'

        const res = await fetch(uri)
        const ingredients = await res.json()

        let newTemplate = ''
        ingredients.forEach(ingredient => {
            template += `
            <div> class="displayIngredient">
                <h2>${ingredient.name}</h2>
                <p>Calories: ${ingredient.caloriesPerServing}</p>
            </div>`
        })
        setTemplate(newTemplate)
    }
    

    window.addEventListener('DOMContentLoaded', () => renderIngredients())
    ////////////////////////////////////////
    */

export default Recipe