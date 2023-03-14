import Recipe from './Recipe';

const RecipeList = ({HOST, recipes, getSelectedRecipe, deleteReceipe}) => {
    return(
        <div className="recipe">
            {recipes.map((recipe) => (
                <div className="recipe-label" key={recipe.id}>
                    <Recipe HOST={HOST} recipe={recipe} getSelectedRecipe={getSelectedRecipe} deleteReceipe={deleteReceipe}/>
                </div>
            ))}
        </div>
    )
}

export default RecipeList