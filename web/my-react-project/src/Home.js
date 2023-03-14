import RecipesBlock from './RecipesBlock';
import IngredientsBlock from './IngredientsBlock';
import EditRecipe from './EditRecipe'
import AddRecipe from './AddRecipe'
import EditIngredient from './EditIngredient'
import AddIngredient from './AddIngredient'
import { useEffect, useState } from "react";
import useFetch from './useFetch';
const Home = () => {
    const HOST = process.env.REACT_APP_HOST
    const REFRESH_DATA = process.env.REACT_APP_REFRESH_DATA
    const [buttonClicked, setButtonClicked] = useState(null)
    const [error, setError] = useState(null)
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null)
    const [selectedIngredient, setSelectedIngredient] = useState(null)
    const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false)
    const [isEditingRecipe, setIsEditingRecipe] = useState(false)
    const [isAddingNewIngredient, setIsAddingNewIngredient] = useState(false)
    const [isEditingIngredient, setIsEditingIngredient] = useState(false)
    
    useEffect(() => {
        if(buttonClicked === null){
            fetch(HOST + REFRESH_DATA)
                .then(response => {
                    if(!response.ok){
                        throw Error('Could not fetch the data for that resource')
                    }
                    return response.json()
                })
                .then(data => {
                    setRecipes(data)
                    if(data[0]){
                        setSelectedRecipe(data[0])
                    }
                    if(data[0].ingredients.length > 0){
                        setSelectedIngredient(data[0].ingredients[0])
                    }
                })
                .catch(err => {
                    setError(err.message)
                })
        }
        else if(buttonClicked === "add recipe"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                setSelectedRecipe(data[data.length - 1])
                setSelectedIngredient(null)
                setError(null)
                setIsAddingNewRecipe(false)
            })
            .catch(err => {
                setError(err.message)
            })
        }else if(buttonClicked === "edit recipe"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                data.find((recipe) => {
                    if(recipe.id === selectedRecipe.id){
                        setSelectedRecipe(recipe)
                    }
                })
                setError(null)
                setIsEditingRecipe(false)
            })
            .catch(err => {
                setError(err.message)
            })
        }else if(buttonClicked === "delete recipe"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                if(data[0]){
                    setSelectedRecipe(data[0])
                }
                if(data[0].ingredients.length > 0){
                    setSelectedIngredient(data[0].ingredients[0])
                }
                
                setError(null)
            })
            .catch(err => {
                setError(err.message)
            })
        }else if(buttonClicked === "add ingredient"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                data.find((recipe) => {
                    if(recipe.id === selectedRecipe.id){
                        setSelectedRecipe(recipe)
                        setSelectedIngredient(recipe.ingredients[recipe.ingredients.length - 1])
                        setError(null)
                        setIsAddingNewIngredient(false)
                    }
                })
            })
            .catch(err => {
                setError(err.message)
            })
        }else if(buttonClicked === "edit ingredient"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                data.find((recipe) => {
                    if(recipe.id === selectedRecipe.id){
                        setSelectedRecipe(recipe)
                        recipe.ingredients.find((ingredient) => {
                            if(ingredient.id === selectedIngredient.id){
                                setSelectedIngredient(ingredient)
                                setError(null)
                                setIsEditingIngredient(false)
                            }
                        })
                    }
                })
            })
            .catch(err => {
                setError(err.message)
            })
        }else if(buttonClicked === "delete ingredient"){
            fetch(HOST + REFRESH_DATA)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setRecipes(data)
                if(data[0]){
                    setSelectedRecipe(data[0])
                }
                if(data[0].ingredients.length > 0){
                    setSelectedIngredient(data[0].ingredients[0])
                }
                
                setError(null)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
        }
        setButtonClicked("neutral")
    }, [buttonClicked, selectedRecipeIndex])

    const addReceipe = (displayStatus) =>{
        setButtonClicked("add recipe")
    }

    const addIngredient = (data) =>{
        setButtonClicked("add ingredient")
    }

    const editReceipe = (data) =>{
        setButtonClicked("edit recipe")
    }

    const editIngredient = (data) =>{
        setButtonClicked("edit ingredient")
    }

    const deleteReceipe = () =>{
        setButtonClicked("delete recipe")
    }
    
    const deleteIngredient = (data) =>{
        setButtonClicked("delete ingredient")
    }

    function findArrayElementByID(array, id){
        return array.find((element) => {
            return element.id === id
        })
    }

    function findRecipeArrayElementByID(array, id){
        return array.find((element) => {
            if(element.id === id){
                if(element.ingredients.length > 0){
                    console.log("has ingredients")
                    setSelectedIngredient(element.ingredients[0])
                }else{
                    console.log("doesn't have ingredients")
                    setSelectedIngredient(null)
                }
            }
            return element.id === id
        })
    }

    const getSelectedRecipe = (selectedRecipeIndex) =>{
        setSelectedRecipeIndex(selectedRecipeIndex)
        setSelectedRecipe(findRecipeArrayElementByID(recipes, selectedRecipeIndex))
    }

    const getSelectedIngredient = (selectedIngredient) =>{
        setSelectedIngredient(findArrayElementByID(selectedRecipe.ingredients, selectedIngredient))
    }

    return(
        <div className="home">
            <h1>Simple Fitness Tracking</h1>
            {isAddingNewRecipe ?
                <div>
                    <button type="button"
                        onClick={() => {
                            setIsAddingNewRecipe(false)
                        }}>
                        Cancel Adding
                    </button>
                    <AddRecipe HOST={HOST} addReceipe={addReceipe}/>
                </div>
            : isEditingRecipe ?
                <div>
                    <button type="button"
                        onClick={() => {
                            setIsEditingRecipe(false)
                        }}>
                        Cancel Editing
                    </button>
                    <EditRecipe HOST={HOST} selectedRecipe={selectedRecipe} editReceipe={editReceipe}/> 
                </div>
            : isAddingNewIngredient ?
                <div>
                <button type="button"
                    onClick={() => {
                        setIsAddingNewIngredient(false)
                    }}>
                    Cancel Adding Ingredient
                </button>
                <AddIngredient HOST={HOST} selectedRecipe={selectedRecipe} addIngredient={addIngredient}/> 
                </div>
            : isEditingIngredient ?
                <div>
                <button type="button"
                    onClick={() => {
                        setIsEditingIngredient(false)
                    }}>
                    Cancel Editing
                </button>
                <EditIngredient HOST={HOST} selectedRecipe={selectedRecipe} selectedIngredient={selectedIngredient} editIngredient={editIngredient}/> 
                </div>
            :
                <div>
                    <h2>Recipes Collapsible Header Placeholder</h2>
                    <div className="recipes">
                        <br/>
                        <button type="button"
                            onClick={() => {
                                setIsAddingNewRecipe(true)
                            }}>
                            Add New Recipe
                        </button>
                        <button type="button"
                            onClick={() => {
                                setIsEditingRecipe(true)
                            }}>
                            Edit Recipe
                        </button>
                        {selectedRecipe && <RecipesBlock HOST={HOST} recipes={recipes} selectedRecipe={selectedRecipe} getSelectedRecipe={getSelectedRecipe} deleteReceipe={deleteReceipe}/>}
                    </div>
                    <h2>Ingredients Collapsible Header Placeholder</h2>
                    <div className="ingredients">
                    <br/>
                        <button type="button"
                            onClick={() => {
                                setIsAddingNewIngredient(true)
                            }}>
                            Add New Ingredient
                        </button>
                        <button type="button"
                            onClick={() => {
                                setIsEditingIngredient(true)
                            }}>
                            Edit Ingredient
                        </button>
                        {selectedRecipe && selectedIngredient && <IngredientsBlock HOST={HOST} selectedRecipe={selectedRecipe} selectedIngredient={selectedIngredient} getSelectedIngredient={getSelectedIngredient} deleteIngredient={deleteIngredient}/>}
                    </div>    
                </div>
            }
        </div>
    )
}

export default Home