import { useState } from "react";

const EditIngredient = ({HOST, selectedRecipe, selectedIngredient, editIngredient}) => {
    const id = selectedIngredient.id
    const [name, setName] = useState(selectedIngredient.name)
    const [description, setDiscription] = useState(selectedIngredient.description)
    const [notes, setNotes] = useState(selectedIngredient.notes)
    const [url, setURL] = useState(selectedIngredient.url)
    const [numberOfContainers, setNumberOfContainers] = useState(selectedIngredient.numberOfContainers)
    const [gramsPerServing, setGramsPerServing] = useState(selectedIngredient.gramsPerServing)
    const [servingsPerContainer, setservingsPerContainer] = useState(selectedIngredient.servingsPerContainer)
    const [caloriesPerServing, setCaloriesPerServing] = useState(selectedIngredient.caloriesPerServing)
    const [totalFatPerServing, settotalFatPerServing] = useState(selectedIngredient.totalFatPerServing)
    const [saturatedFatPerServing, setSaturatedFatPerServing] = useState(selectedIngredient.saturatedFatPerServing)
    const [transFatPerServing, setTransFatPerServing] = useState(selectedIngredient.transFatPerServing)
    const [cholesterolPerServing, setCholesterolPerServing] = useState(selectedIngredient.cholesterolPerServing)
    const [sodiumPerServing, setSodiumPerServing] = useState(selectedIngredient.sodiumPerServing)
    const [totalCarbsPerServing, setTotalCarbsPerServing] = useState(selectedIngredient.totalCarbsPerServing)
    const [fiberPerServing, setFiberPerServing] = useState(selectedIngredient.fiberPerServing)
    const [totalSugarsPerServing, setTotalSugarsPerServing] = useState(selectedIngredient.totalSugarsPerServing)
    const [totalAddedSugarsPerServing, setTotalAddedSugarsPerServing] = useState(selectedIngredient.totalAddedSugarsPerServing)
    const [proteinPerServing, setProteinPerServing] = useState(selectedIngredient.proteinPerServing)

    const handleSubmit = (e) => {
        e.preventDefault()
        const ingredient = {id, 
                            name,
                            numberOfContainers,
                            gramsPerServing,
                            servingsPerContainer,
                            caloriesPerServing,
                            totalFatPerServing,
                            saturatedFatPerServing,
                            transFatPerServing,
                            cholesterolPerServing,
                            sodiumPerServing,
                            totalCarbsPerServing,
                            fiberPerServing,
                            totalSugarsPerServing,
                            totalAddedSugarsPerServing,
                            proteinPerServing,
                            description,
                            notes,
                            url
                        }

        //setIsPending(true)

        //Can do more research on headers
        //This is fron stack overflow with these headers
        //The tutorial I watched for the other functions only had "Content-Type"
        fetch(HOST + process.env.REACT_APP_UPDATE_INGREDIENT + selectedRecipe.id, {
            method: 'PUT',
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingredient)
        })
            .then(() => {
                editIngredient(false)
            })
    }

    return(
        <div className="edit-ingredient">
            <h2>Editing Ingredient: {selectedIngredient.name}</h2>
            <br/>
            <form onSubmit={handleSubmit}>
            <input type="submit" value="Submit" />
                <div>
                    <label>Ingredient Name:</label>
                    <input
                        type="text"
                        required
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Number of Containers:</label>
                    <input
                        type="text"
                        required
                        value={numberOfContainers}
                        onChange={(e) => setNumberOfContainers(e.target.value)}
                    />
                </div>
                <div>
                    <label>Grams Per Serving:</label>
                    <input
                        type="text"
                        required
                        value={gramsPerServing}
                        onChange={(e) => setGramsPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Servings per Container:</label>
                    <input
                        type="text"
                        required
                        value={servingsPerContainer}
                        onChange={(e) => setservingsPerContainer(e.target.value)}
                    />
                </div>
                <h4>Macros per serving</h4>
                <div>
                    <label>Calories:</label>
                    <input
                        type="text"
                        required
                        value={caloriesPerServing}
                        onChange={(e) => setCaloriesPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Fat:</label>
                    <input
                        type="text"
                        required
                        value={totalFatPerServing}
                        onChange={(e) => settotalFatPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Saturated Fat:</label>
                    <input
                        type="text"
                        required
                        value={saturatedFatPerServing}
                        onChange={(e) => setSaturatedFatPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Trans Fat:</label>
                    <input
                        type="text"
                        required
                        value={transFatPerServing}
                        onChange={(e) => setTransFatPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cholesterol:</label>
                    <input
                        type="text"
                        required
                        value={cholesterolPerServing}
                        onChange={(e) => setCholesterolPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Sodium:</label>
                    <input
                        type="text"
                        required
                        value={sodiumPerServing}
                        onChange={(e) => setSodiumPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Total Carbs:</label>
                    <input
                        type="text"
                        required
                        value={totalCarbsPerServing}
                        onChange={(e) => setTotalCarbsPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Fiber:</label>
                    <input
                        type="text"
                        required
                        value={fiberPerServing}
                        onChange={(e) => setFiberPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Total Sugars:</label>
                    <input
                        type="text"
                        required
                        value={totalSugarsPerServing}
                        onChange={(e) => setTotalSugarsPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Total Added Sugars:</label>
                    <input
                        type="text"
                        required
                        value={totalAddedSugarsPerServing}
                        onChange={(e) => setTotalAddedSugarsPerServing(e.target.value)}
                    />
                </div>
                <div>
                    <label>Protein:</label>
                    <input
                        type="text"
                        required
                        value={proteinPerServing}
                        onChange={(e) => setProteinPerServing(e.target.value)}
                    />
                </div>

                <br/>
                <br/>

                <label>Edit Ingredient Description:</label>
                <br/>
                <textarea
                    rows={3}
                    cols={50}
                    type="text"
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                />

                <br/><br/>

                <label>Edit Ingredient Notes:</label>
                <br/>
                <textarea
                    rows={5}
                    cols={50}
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                
                <br/><br/>

                <label>Edit Ingredient URL: </label>
                <input
                    size={41}
                    type="text"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <br/>

            </form>
        </div>
    )
}

export default EditIngredient