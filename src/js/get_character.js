import { getAchievement } from 'https://gael-58.github.io/achievements_thing/src/js/get_achievement.js';
import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getCharacterDetails(divToAppendInto, charRoute, achievRoute, key) {
    const divCharacterDetails = document.createElement("div");
    let data = await getData(charRoute);
    console.log("key " + key);
    console.log("data[key] = " + data[key]);
    if (data[key] != null && data[key] != '') {

        const section = document.createElement("h1");
        const subSection = document.createElement("h2");
        const br = document.createElement("br");
        section.innerText = "Name & details";

        

        
        divCharacterDetails.appendChild(section.cloneNode(true))
        if(data[key].name != null && data[key].name != ""){
        
        const true_name = document.createElement("h6");
        true_name.innerText = data[key].name;
        divCharacterDetails.appendChild(true_name.cloneNode(true));
        
        }
        if(data[key].display_name != null && data[key].display_name != ""){
        subSection.innerText = "name";
        const name = document.createElement("h2");
        name.innerText = data[key].display_name;
        divCharacterDetails.appendChild(subSection.cloneNode(true));
        divCharacterDetails.appendChild(name.cloneNode(true));
        }
        if(data[key].details != null && data[key].details != ""){
        subSection.innerText = "description";
        const details = document.createElement("p");
        details.innerText = data[key].display_name;
        divCharacterDetails.appendChild(subSection.cloneNode(true));
        divCharacterDetails.appendChild(details.cloneNode(true));
        }
        divCharacterDetails.appendChild(br.cloneNode(true));
        divCharacterDetails.appendChild(br.cloneNode(true));
        divCharacterDetails.appendChild(br.cloneNode(true));
        divCharacterDetails.appendChild(br.cloneNode(true));
        section.innerText = "Achievements:";
        divCharacterDetails.appendChild(section.cloneNode(true));
        getCharacterAchievements(divCharacterDetails, charRoute, achievRoute, key, "achievements");

        async function getCharacterAchievements(outputDiv, charRoute, achievRoute, ...keys) {
            console.log("getCharacter keys = " + keys.toString());
            let output = await getData(charRoute);
            if(keys != null && keys[0] != ''){
            
            for (let key of keys) {
                if(key == keys[0]){
                output = output[key]
                } else{
                output = output.key;
            }
            }
            }

            for (let i in output) {
                    console.log("getCharacter i = " + i);
                    console.log("getCharacter output.i = " + JSON.stringify(output.i));
                if (output.i == null || output.i == '') {
                    for (t of await getAchievement(achievRoute, keys.splice(0, 2))) {
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = "Name";
                        descr.innerText = t.name;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Effect";
                        descr.innerText = t.effect;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Name";
                        descr.innerText = t.method;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                    }

                } else if (output.i.constructor === ({}).constructor) {
                    getCharacterAchievements(outputDiv, charRoute, achievRoute, keys.push(i));
                } else {
                    for (t of await getAchievement(achievRoute, keys.splice(0, 2))) {
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = "Name";
                        descr.innerText = t.name.replace("{n}", output[i]);
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Effect";
                        descr.innerText = t.effect;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Name";
                        descr.innerText = t.method;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                    }
                }
            }

        }

    }
    
    divToAppendInto.appendChild(divCharacterDetails.cloneNode(true));


}


