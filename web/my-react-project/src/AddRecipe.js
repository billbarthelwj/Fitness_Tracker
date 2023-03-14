import { useState } from "react";

const AddRecipe = ({HOST, addReceipe}) => {
    const [name, setName] = useState('')
    const [displayStyle, setDisplayStyle] = useState("perGram")
    const [totalNumberOfServings, setTotalNumberOfServings] = useState(1)
    const [description, setDiscription] = useState("")
    const [notes, setNotes] = useState("")
    const [url, setURL] = useState("")
    const ingredients = []
    //const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const recipe = {name, displayStyle, totalNumberOfServings, description, notes, url, ingredients}

        //setIsPending(true)

        fetch(HOST + process.env.REACT_APP_NEW_RECIPE, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        })
            .then(() => {
                console.log(recipe)
                console.log("Recipe added!")
                //setIsPending(false)//Don't think you really need to do this
                addReceipe(false)
            })
    }

    return(
        <div className="add-recipe">
            <h2>Add New Recipe</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Recipe Name:</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>

                <label>Set Macro Display Style:</label>
                <select value={displayStyle} onChange={(e) => setDisplayStyle(e.target.value)} name="displayStyle" id="displayStyle">
                    <option value="perGram">Macros Per Gram</option>
                    <option value="perServing">Macros Per Serving</option>
                </select>
                <br/>

                <label>Total Number of Servings:</label>
                <input
                    type="number"
                    min={0}
                    value={totalNumberOfServings}
                    onChange={(e) => setTotalNumberOfServings(e.target.value)}
                />

                <br/>
                <br/>

                <label>Recipe Description:</label>
                <br/>
                <textarea
                    rows={3}
                    cols={50}
                    type="text"
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                />
                <br/><br/>

                <label>Recipe Notes:</label>
                <br/>
                <textarea
                    rows={5}
                    cols={50}
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <br/><br/>

                <label>Recipe URL: </label>
                <input
                    size={50}
                    type="text"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <br/><br/>

                <input type="submit" />

            </form>
        </div>
    )
}

export default AddRecipe