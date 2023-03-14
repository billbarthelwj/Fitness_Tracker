import { useEffect, useState } from "react";
import './css/Ingredient.css';

const RecipeDetails = ({recipe}) => {
    const [servingInGrams, setServingInGrams] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)
    const [totalFat, setTotalFat] = useState(0)
    const [totalSaturatedFat, setTotalSaturatedFat] = useState(0)
    const [totalTransFat, setTotalTransFat] = useState(0)
    const [totalCholesterol, setTotalCholesterol] = useState(0)
    const [totalSodium, setTotalSodium] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalFiber, setTotalFiber] = useState(0)
    const [totalSugars, setTotalSugars] = useState(0)
    const [totalAddedSugars, setTotalAddedSugars] = useState(0)
    const [totalProtein, setTotalProtein] = useState(0)

    useEffect(() => {
        //To set these we need to go through every item in recipe.ingredients
        setTotalCalories(servingInGrams)
        setTotalFat(servingInGrams * 2)
    })

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h2>{recipe.name}</h2>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Serving in Grams : 
                            <input
                                type="number"
                                required
                                value={servingInGrams}
                                onChange={(e) => setServingInGrams(e.target.value)}
                            />
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
                                Placeholder Calories :
                            </label>
                        </td>
                        <td>
                            {totalCalories}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Placeholder Total Fat :
                            </label>
                        </td>
                        <td>
                            {totalFat}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Saturated Fat :
                            </label>
                        </td>
                        <td>
                            {totalSaturatedFat}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Trans Fat :
                            </label>
                        </td>
                        <td>
                            {totalTransFat}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Cholesterol :
                            </label>
                        </td>
                        <td>
                            {totalCholesterol}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sodium :
                            </label>
                        </td>
                        <td>
                            {totalSodium}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Carbs :
                            </label>
                        </td>
                        <td>
                            {totalCarbs}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Fiber :
                            </label>
                        </td>
                        <td>
                            {totalFiber}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Sugars :
                            </label>
                        </td>
                        <td>
                            {totalSugars}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Total Added Sugars :
                            </label>
                        </td>
                        <td>
                            {totalAddedSugars}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Protein :
                            </label>
                        </td>
                        <td>
                            {totalProtein}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecipeDetails