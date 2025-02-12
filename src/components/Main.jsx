import React from 'react'

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }    

    return (
        
        <main>
            <form action={addIngredient} className="addIngredientForm">
                <input 
                    type="text" 
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>

            <ul id="ingredientsList">
              {ingredientsListItems}
            </ul>
        </main>
      
    )
}