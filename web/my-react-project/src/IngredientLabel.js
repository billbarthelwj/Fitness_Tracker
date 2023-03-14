import './css/Recipe.css'

const IngredientLabel = ({HOST, selectedRecipe, ingredient, getSelectedIngredient, deleteIngredient}) => {

    const handleClick = () => {
        fetch(HOST + process.env.REACT_APP_DELETE_INGREDIENT + selectedRecipe.id + '/' + ingredient.id, {
            method: 'DELETE'
        })
        .then(() => {
            //getSelectedRecipe(0)
            deleteIngredient()
        })
    }

    return (
        <div className="ingredient-preview" 
             key={ingredient.id}
             onClick={() => {
                getSelectedIngredient(ingredient.id);
              }}
        >
            <table>
                <tbody>
                <tr>
                    <td>
                    <h2>{ingredient.name}</h2>
                    </td>
                    <td rowSpan={2} align="center" className="first">
                        <button onClick={handleClick}>
                            Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    {ingredient.description}
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default IngredientLabel