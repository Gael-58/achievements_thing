import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

import { getCharacterSelector } from 'https://gael-58.github.io/achievements_thing/src/js/character_select.js';
import { getCharacterDetails } from 'https://gael-58.github.io/achievements_thing/src/js/get_character.js';

const charRoute = "https://gael-58.github.io/achievements_thing/src/data/characters.json";
const achievRoute = "https://gael-58.github.io/achievements_thing/src/data/achievements.json";


const divCharacterSelect = document.createElement("div");
const divInnerStuff = document.createElement("div");

const characterSelector = getCharacterSelector(charRoute);
characterSelector.id = "char_selector"

const btnGetSelection = document.createElement("input");
btnGetSelection.type = "button";

divCharacterSelect.append(characterSelector);
divCharacterSelect.append(btnGetSelection);

btnGetSelection.addEventListener("click", function (event) {
    while (divInnerStuff.firstChild !== null) {
        divInnerStuff.removeChild(divInnerStuff.firstChild);
    }
    (async () => {
        event.preventDefault();
        for (let key in Array.from(document.getElementById("char_selector")).filter(option => option.selected).map(option => option.value)) {
            divInnerStuff.append(getCharacterDetails(charRoute, achievRoute, key).cloneNode(true));
        }


        
        document.body.appendChild(divInnerStuff);

    })();
});
    document.body.appendChild(divCharacterSelect);
    
