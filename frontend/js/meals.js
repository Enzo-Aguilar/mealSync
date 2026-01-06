const meals = [
    {id: 1, name: "Pasta", price: 2.5},
    {id: 2, name: "Chicken & Rice", price: 3.0},
    {id: 3, name: "Vegetarian", price: 2.0}
];

const container = document.getElementById("div_meals");

meals.forEach(meal => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${meal.name}</h3>
    <p>€${meal.price}</p>
    <button>Select</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
        alert(`You selected ${meal.name}`)
    });
    container.append(div)
})