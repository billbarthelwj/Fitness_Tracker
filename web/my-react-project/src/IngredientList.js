import IngredientLabel from './IngredientLabel';

const IngredientsList = ({HOST, selectedRecipe, ingredientList, getSelectedIngredient, deleteIngredient}) => {
    return(
        <div className="ingredientList">
            {ingredientList.map((ingredient) => (
                <div className="ingredient-label" key={ingredient.id}>
                    <IngredientLabel HOST={HOST} selectedRecipe={selectedRecipe} ingredient={ingredient} getSelectedIngredient={getSelectedIngredient} deleteIngredient={deleteIngredient}/>
                </div>
            ))}
        </div>
    )
}

export default IngredientsList