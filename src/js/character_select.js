import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getCharacterSelector(characterSelector, route){
  const urlCharacters = route;
  characterSelector.id = "characterSelect";
  // characterSelector.multiple = true;
    
  let data = await getData(urlCharacters);
    for (let key in data) {
      const listOption = document.createElement("option");
      listOption.value = key;
      listOption.innerText = data[key].display_name;
      characterSelector.appendChild(listOption.cloneNode(true));
    }
}

