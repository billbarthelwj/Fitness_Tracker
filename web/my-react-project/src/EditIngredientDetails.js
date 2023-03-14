const IngredientsDetails = ({ingredient}) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h2>{ingredient.name}</h2>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Net Weight :
                            </label>
                        </td>
                        <td>
                            {ingredient.netWeight}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Number of Containers :
                            </label>
                        </td>
                        <td>
                            {ingredient.numberOfContainers}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Servings Per Container :
                            </label>
                        </td>
                        <td>
                            {ingredient.servingsPerContainer}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                -----------------------------------------------
                            </label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label>
                                Calories :
                            </label>
                        </td>
                        <td>
                            {ingredient.caloriesPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Total Fat :
                            </label>
                        </td>
                        <td>
                            {ingredient.totalFatPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Saturated Fat :
                            </label>
                        </td>
                        <td>
                            {ingredient.saturatedFatPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Trans Fat :
                            </label>
                        </td>
                        <td>
                            {ingredient.transFatPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Cholesterol :
                            </label>
                        </td>
                        <td>
                            {ingredient.cholesterolPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sodium :
                            </label>
                        </td>
                        <td>
                            {ingredient.sodiumPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Carbs :
                            </label>
                        </td>
                        <td>
                            {ingredient.totalCarbsPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Fiber :
                            </label>
                        </td>
                        <td>
                            {ingredient.fiberPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sugars :
                            </label>
                        </td>
                        <td>
                            {ingredient.totalSugarsPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Total Added Sugars :
                            </label>
                        </td>
                        <td>
                            {ingredient.totalAddedSugarsPerServing}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Protein :
                            </label>
                        </td>
                        <td>
                            {ingredient.proteinPerServing}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IngredientsDetails