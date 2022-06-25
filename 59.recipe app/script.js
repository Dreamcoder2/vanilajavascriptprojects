//www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
const form = document.querySelector("form");
const search = document.querySelector("#search");
const meallist = document.getElementById("meal");
const mealmodal = document.querySelector(".class-modal");
const recipe = document.querySelector(".recipe-content");
const closebtn = document.querySelector(".close-btn");

//Api
const searchurl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupurl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
closebtn.addEventListener("click", () => {
  mealmodal.style.display = "none";
});

form.addEventListener("submit", getmeals);
meal.addEventListener("click", getmealrecipe);
//Get meals
async function getmeals() {
  let searchval = search.value.trim();
  const res = await fetch(`${searchurl}${searchval}`);
  const data = await res.json();
  displmeals(data.meals);
}

//display meals
function displmeals(meals) {
  let html = "";
  if (meals) {
    meals.forEach((meal) => {
      html += `
      <div class="meal" data-id="${meal.idMeal}">
      <div class="meal-img">
        <img src="${meal.strMealThumb}" alt="" />
        </div>
        <div class="meal-name">
        <h3>${meal.strMeal}</h3>
        <a href="#" class="recipe-btn">View Recipe &rarr;</a>
      
      </div>
    </div>
      `;
    });
  } else {
    html = "No meal was found, Please try again";
  }
  meallist.innerHTML = html;
}

//get recipe
async function getmealrecipe(e) {
  if (e.target.classList.contains("recipe-btn")) {
    let mealitem = e.target.parentElement.parentElement;
    const res = await fetch(`${lookupurl}${mealitem.dataset.id}`);
    const data = await res.json();
    displayrecipe(data.meals);
  }
}

//display recipe
function displayrecipe(meal) {
  meal = meal[0];
  let html = `
  <div class="recipe-img">
  <img src="${meal.strMealThumb}" alt="" />
</div>
<h2 class="recipe-title">${meal.strMeal}</h2>
<div class="recipe-instruction">
  <h3>Instruction</h3>
  <p>
    ${meal.strInstructions}
  </p>
</div>
<div class="recipe-link">
  <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
</div>
  `;

  recipe.innerHTML = html;
  mealmodal.style.display = "block";
}
