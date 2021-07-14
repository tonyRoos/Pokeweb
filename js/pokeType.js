function typeColor(type) {
    switch (type) {
        case 'bug':
            return "lightgreen";
            break;
        case 'electric':
            return "goldenrod";
            break;
        case 'fire':
            return "red";
            break;
        case 'grass':
            return "green";
            break;
        case 'normal':
            return "gray";
            break;
        case 'rock':
            return "sienna";
            break;
        case 'dark':
            return "black";
            break;
        case 'fairy':
            return "pink";
            break;
        case 'flying':
            return "lightblue";
            break;
        case 'ground':
            return "sienna";
            break;
        case 'poison':
            return "purple";
            break;
        case 'steel':
            return "grey";
            break;
        case 'dragon':
            return "violet";
            break;
        case 'fighting':
            return "orange";
            break;
        case 'ghost':
            return "violetblue";
            break;
        case 'ice':
            return "lightblue";
            break;
        case 'psychic':
            return "palevioletred";
            break;
        case 'water':
            return "blue";
            break;

    }
}

class Poketype {
    refreshTypes(typeList) {
        let ul = document.getElementById("typeList");

        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        for (let i = 0; i < typeList.length; i++) {
            let li = document.createElement("li");
            li.className = "pokeType";
            li.appendChild(document.createTextNode(typeList[i].type.name));
            li.setAttribute('id', `type${i}`);
            ul.appendChild(li);
            li.style.backgroundColor = typeColor(typeList[i].type.name);
        }
    }
}