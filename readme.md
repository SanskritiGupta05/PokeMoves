## ⚡PokeMoves:

This is a project made with public API [Pokemon API](https://pokeapi.co/).

It fetches the <b>popular</b> moves of a pokemon -> entered by the user -> and then display them as Output!

<b>(NOTE: please write pokemon names in "SMALLCASE LETTERS" for the API to fetch the data.)</b>

![Web page screenshot](/Untitled%20(7).png)

1. This codeblock fetches the <b>first 5 moves</b> of Pokemon from the moves Array.👇🏻

<code>

     fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let moveList = "";
                for (let i = 0; i < 5; i++) {
                    moveList += `<i class="fa-solid fa-bolt"></i>` + "  " + data.moves[i].move.name + "  " + `<i class="fa-solid fa-bolt"></i>` + "<br>";
            }
</code>

2. This code block displays that data as output. 👇🏻

<code>

          document.getElementById('output').innerHTML =  moveList;

</code>