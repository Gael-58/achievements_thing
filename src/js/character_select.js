
export async function getCharacterSelector(route){
  const urlCharacters = route;
  const characterSelector = document.createElement("select");
  characterSelector.id = "characterSelect";
  // characterSelector.multiple = true;
    
  let data = await getData(urlCharacters);
    for (let key in data) {
      const listOption = document.createElement("option");
      listOption.value = key;
      listOption.innerText = data[key].display_name;
      characterSelector.appendChild(listOption.cloneNode(true));
    }
  return characterSelector;
}
