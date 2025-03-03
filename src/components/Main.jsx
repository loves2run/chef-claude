import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./Recipe"
import { getRecipeFromChefClaude } from "../ai"


export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const [recipeText, setRecipeText] = React.useState("")
    
    async function getRecipe() {

        const recipe = await getRecipeFromChefClaude(ingredients)
        setRecipeText(recipe)
        setRecipeShown(true)

    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                    handleClick={getRecipe}
                />
            }

            {recipeShown && 
            <ClaudeRecipe 
                recipe={recipeText}
            />}
        </main>
    )
}