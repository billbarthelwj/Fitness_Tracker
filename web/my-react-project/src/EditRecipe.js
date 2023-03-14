import { useState } from "react";
import './css/EditRecipe.css';

const EditRecipe = ({HOST, selectedRecipe, editReceipe}) => {
    console.log("EditRecipe selectedRecipe : " + selectedRecipe)
    const id = selectedRecipe.id
    const [name, setName] = useState(selectedRecipe.name)//Could be blank. Could set default value
    const [displayStyle, setDisplayStyle] = useState(selectedRecipe.displayStyle)
    const [totalNumberOfServings, setTotalNumberOfServings] = useState(selectedRecipe.totalNumberOfServings)
    const [description, setDiscription] = useState(selectedRecipe.description)
    const [notes, setNotes] = useState(selectedRecipe.notes)
    const [url, setURL] = useState(selectedRecipe.url)
    const ingredients = selectedRecipe.ingredients
    //const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const recipe = {id, 
                        name, 
                        displayStyle, 
                        totalNumberOfServings, 
                        description, 
                        notes, 
                        url, 
                        ingredients
                    }

        //setIsPending(true)

        //Can do more research on headers
        //This is fron stack overflow with these headers
        //The tutorial I watched for the other functions only had "Content-Type"
        fetch(HOST + process.env.REACT_APP_UPDATE_RECIPE + selectedRecipe.id, {
            method: 'PUT',
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then(() => {
                console.log(recipe)
                console.log("Recipe edited!")
                //setIsPending(false)//Don't think you really need to do this
                editReceipe(false)
            })
    }

    return(
        <div className="edit-recipe">
            <h2>Editing Recipe: {selectedRecipe.name}</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Edit Recipe Name:</label>
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

                <label>Edit Total Number of Servings:</label>
                <input
                    type="number"
                    required
                    min={1}
                    value={totalNumberOfServings}
                    onChange={(e) => setTotalNumberOfServings(e.target.value)}
                />

                <br/>
                <br/>

                <label>Edit Recipe Description:</label>
                <br/>
                <textarea
                    rows={3}
                    cols={50}
                    type="text"
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                />
                <br/><br/>

                <label>Edit Recipe Notes:</label>
                <br/>
                <textarea
                    rows={5}
                    cols={50}
                    white-space="pre-wrap"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <br/><br/>

                <label>Edit Recipe URL: </label>
                <input
                    size={45}
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

export default EditRecipe