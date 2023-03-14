import IngredientList from './IngredientList';
import IngredientDetails from './IngredientDetails';
import './css/IngredientsBlock.css';

const IngredientsBlock = ({HOST, selectedRecipe, selectedIngredient, getSelectedIngredient, deleteIngredient}) => {

    return(
        <div className="ingredients-block">
            <div className="flex-child ingredients-list">
                {selectedIngredient && <IngredientList HOST={HOST} selectedRecipe={selectedRecipe} ingredientList={selectedRecipe.ingredients} getSelectedIngredient={getSelectedIngredient} deleteIngredient={deleteIngredient}/>}
            </div>
            <div className="flex-child ingredient-details">
                {selectedIngredient && <IngredientDetails ingredient={selectedIngredient}/>}
            </div>
        </div>
    )
}

export default IngredientsBlock 