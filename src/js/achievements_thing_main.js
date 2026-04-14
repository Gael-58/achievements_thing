import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

import { getCharacterSelector } from 'https://gael-58.github.io/achievements_thing/src/js/character_select.js';
import { getCharacterDetails } from 'https://gael-58.github.io/achievements_thing/src/js/get_character.js';

const charRoute = "https://gael-58.github.io/achievements_thing/src/data/characters.json";
const achievRoute = "https://gael-58.github.io/achievements_thing/src/data/achievements.json";


const divCharacterSelect = document.createElement("div");
const divInnerStuff = document.createElement("div");
const characterSelector = document.createElement("select");
getCharacterSelector(characterSelector, charRoute);
characterSelector.id = "characterSelect";

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
        for (let key in Array.from(document.getElementById("characterSelect")).filter(option => option.selected).map(option => option.value)) {
            
            console.log("test1");
            console.log("key " + key);
            
            getCharacterDetails(divInnerStuff, charRoute, achievRoute, key);
            console.log("test2");
        }


        

    })();
});
    document.body.appendChild(divCharacterSelect);
    document.body.appendChild(divInnerStuff);
    
