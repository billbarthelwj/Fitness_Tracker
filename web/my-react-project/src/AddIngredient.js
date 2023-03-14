import { useEffect, useState } from "react";

const AddIngredient = ({HOST, selectedRecipe, addIngredient}) => {
    const [name, setName] = useState('')
    const [description, setDiscription] = useState("")
    const [notes, setNotes] = useState("")
    const [url, setURL] = useState("")
    const [numberOfContainers, setNumberOfContainers] = useState(1)
    const [gramsPerServing, setGramsPerServing] = useState(0)
    const [servingsPerContainer, setservingsPerContainer] = useState(1)
    const [caloriesPerServing, setCaloriesPerServing] = useState(0)
    const [totalFatPerServing, settotalFatPerServing] = useState(0)
    const [saturatedFatPerServing, setSaturatedFatPerServing] = useState(0)
    const [transFatPerServing, setTransFatPerServing] = useState(0)
    const [cholesterolPerServing, setCholesterolPerServing] = useState(0)
    const [sodiumPerServing, setSodiumPerServing] = useState(0)
    const [totalCarbsPerServing, setTotalCarbsPerServing] = useState(0)
    const [fiberPerServing, setFiberPerServing] = useState(0)
    const [totalSugarsPerServing, setTotalSugarsPerServing] = useState(0)
    const [totalAddedSugarsPerServing, setTotalAddedSugarsPerServing] = useState(0)
    const [proteinPerServing, setProteinPerServing] = useState(0)
    //const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const ingredient = {
            name,
            numberOfContainers,
            servingsPerContainer,
            gramsPerServing,
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

        //Apparently this breaks as a POST request
        fetch(HOST + process.env.REACT_APP_NEW_INGREDIENT + selectedRecipe.id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ingredient)
        })
            .then(() => {
                //setIsPending(false)//Don't think you really need to do this
                addIngredient(false)
            })
    }

    return(
        <div className="add-ingredient">
            <h2>Add New Ingredient</h2>
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

                <label>Ingredient Description:</label>
                <br/>
                <textarea
                    rows={3}
                    cols={50}
                    type="text"
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                />
                
                <br/><br/>

                <label>Ingredient Notes:</label>
                <br/>
                <textarea
                    rows={5}
                    cols={50}
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                
                <br/><br/>

                <label>Ingredient URL: </label>
                <input
                    size={46}
                    type="text"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <br/>

            </form>
        </div>
    )
}

export default AddIngredient