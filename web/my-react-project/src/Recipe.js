import './css/Recipe.css';

const Recipe = ({HOST, recipe, getSelectedRecipe, deleteReceipe}) => {

    const handleClick = () => {
        fetch(HOST + process.env.REACT_APP_DELETE_RECIPE + recipe.id, {
            method: 'DELETE'
        })
        .then(() => {
            deleteReceipe()
        })
    }

    return (
        <div className="recipe-preview" 
             key={recipe.id}
             onClick={() => {
                getSelectedRecipe(recipe.id);
              }} 
        >
            
            <table>
                <tbody>
                <tr>
                    <td>
                        <h2>{recipe.name}</h2>
                    </td>
                    <td rowSpan={2} align="center" className="first">
                        <button onClick={handleClick}>
                            Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    {recipe.description}
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Recipe