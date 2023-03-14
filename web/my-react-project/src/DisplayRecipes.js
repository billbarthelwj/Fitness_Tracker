import RecipesBlock from './RecipesBlock';
import IngredientsBlock from './IngredientsBlock';

const DisplayRecipes = (recipes, selectedRecipe, getSelectedRecipe, selectedIngredientIndex, handleCallback) => {
    return(
        <div className="home">
            <h1>Simple Fitness Tracking</h1>
                <h2>Recipes Collapsible Header Placeholder</h2>
                <div className="recipes">
                    <div>
                        {selectedRecipe && <RecipesBlock recipes={recipes} selectedRecipe={selectedRecipe} getSelectedRecipe={getSelectedRecipe}/>}
                    </div>
                    <h2>Ingredients Collapsible Header Placeholder</h2>
                    <div className="ingredients">
                        {selectedRecipe && <IngredientsBlock selectedRecipe={selectedRecipe} selectedIngredientIndex={selectedIngredientIndex} handleCallback={handleCallback}/>}
                    </div>    
                </div>
        </div>
    )
}

export default DisplayRecipes