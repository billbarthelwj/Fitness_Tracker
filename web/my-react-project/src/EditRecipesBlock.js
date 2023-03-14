import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import './css/RecipesBlock.css';

//For some reason RecipeDetails isn't updating the name like RecipeList
const EditRecipesBlock = ({recipes, selectedRecipe, getSelectedRecipe, deleteReceipe}) => {
    return(
        <div className="recipes-block">
            <div className="flex-child recipes-list">
                <RecipeList recipes={recipes} getSelectedRecipe={getSelectedRecipe} deleteReceipe={deleteReceipe}/>
            </div>
            <div className="flex-child recipe-details">
                <RecipeDetails recipe={selectedRecipe}/>
            </div>
        </div>
    )
}

export default EditRecipesBlock