const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

function createIngredientsList() {
  const fragment = document.createDocumentFragment();

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    fragment.appendChild(listItem);
  });

  ingredientsList.appendChild(fragment);
}

createIngredientsList();
