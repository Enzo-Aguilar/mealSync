const meals = [
    {id: 1, name: "Pasta", price: 2.5},
    {id: 2, name: "Chicken & Rice", price: 3.0},
    {id: 3, name: "Vegetarian", price: 2.0}
];
const container = document.getElementById("div_meals");

let selectedMeals = JSON.parse(localStorage.getItem("selectedMeals")) || [];


meals.forEach(mealCounter => {
    const div = document.createElement("div");
    
    div.innerHTML = `
    <h3>${mealCounter.name}</h3>
    <p>€${mealCounter.price}</p>
    <button>Select</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
        selectedMeals.push(mealCounter)
        localStorage.setItem("selectedMeals", JSON.stringify(selectedMeals));
        alert(`${mealCounter.name} saved`);
    });

    container.append(div)
})