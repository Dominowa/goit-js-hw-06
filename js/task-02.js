// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// const ingredientsList = document.getElementById("ingredients");

// function createIngredientsList() {
//   const itemsHTML = ingredients
//     .map((ingredient) => `<li class="item">${ingredient}</li>`)
//     .join("");

//   ingredientsList.insertAdjacentHTML("beforeend", itemsHTML);
// }

// createIngredientsList();

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
