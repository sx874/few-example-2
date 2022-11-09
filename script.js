
const bttn = document.getElementById("bttn");
bttn.addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(data => console.log(data));

    let pokemon = data.results[Math.floor(Math.random() * data.results.length)].name;
    console.log(pokemon);
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("img").src = data.sprites.front_shiny;
    });
})