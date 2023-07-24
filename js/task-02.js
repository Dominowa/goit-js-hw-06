const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

function createIngredientsList() {
  const itemsHTML = ingredients
    .map((ingredient) => `<li class="item">${ingredient}</li>`)
    .join("");

  ingredientsList.insertAdjacentHTML("beforeend", itemsHTML);
}

createIngredientsList();
