document.getElementById('getApi').addEventListener('click', getApi);

function getApi() {
    var PokeName = document.getElementById('pokeName').value;
console.log(PokeName);


const url = `https://pokeapi.co/api/v2/pokemon/${PokeName}`;
console.log(url);

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let moveList = "";
            for (let i = 0; i < 5; i++) {
                moveList += `<i class="fa-solid fa-bolt"></i>` + "  " + data.moves[i].move.name + "  " + `<i class="fa-solid fa-bolt"></i>` + "<br>";
            }

            console.log(data);
        document.getElementById('output').innerHTML =  moveList;
    }).catch((err) => console.log(err))

}
