import { getAchievement } from 'https://gael-58.github.io/achievements_thing/src/js/get_achievement.js';
import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getCharacterDetails(divToAppendInto, charRoute, achievRoute, key) {
    const divCharacterDetails = document.createElement("div");
    let data = await getData(charRoute);
    // console.log("key " + key);
    // console.log("data[key] = " + data[key]);
    if (data[key] != null && data[key] != '') {

        const section = document.createElement("h1");
        const subSection = document.createElement("h2");
        const br = document.createElement("br");
        section.innerText = "Name & details";
        divCharacterDetails.appendChild(section.cloneNode(true))
        if((data[key].display_name != null && data[key].display_name != "") || (data[key].name != null && data[key].name != "")){
        subSection.innerText = "name";
        divCharacterDetails.appendChild(subSection.cloneNode(true));
            
        if(data[key].name != null && data[key].name != ""){
        
        const true_name = document.createElement("h6");
        true_name.innerText = data[key].name;
        divCharacterDetails.appendChild(true_name.cloneNode(true));
        }
        if(data[key].display_name != null && data[key].display_name != ""){
        const name = document.createElement("h1");
        name.innerText = data[key].display_name;
        divCharacterDetails.appendChild(name.cloneNode(true));
        }
        }
        if(data[key].details != null && data[key].details != ""){
        subSection.innerText = "description";
        const details = document.createElement("p");
        details.innerText = data[key].details;
        divCharacterDetails.appendChild(subSection.cloneNode(true));
        divCharacterDetails.appendChild(details.cloneNode(true));
        }
        divCharacterDetails.appendChild(br.cloneNode(true));
        section.innerText = "Achievements:";
        divCharacterDetails.appendChild(section.cloneNode(true));
        divToAppendInto.appendChild(divCharacterDetails.cloneNode(true));
        getCharacterAchievements(divToAppendInto, "-", charRoute, achievRoute, key, "achievements");
        //getCharacterAchievements(divCharacterDetails, "     " charRoute, achievRoute, key, "achievements");

        async function getCharacterAchievements(outputDiv, prefix, charRoute, achievRoute, ...keys) {
            // console.log("NEW getCharacter ROUND");
            // console.log("getCharacter charRoute = " + charRoute);
            // console.log("getCharacter achievRoute = " + achievRoute);
            
            console.log("getCharacter keys = " + keys.toString());
            let output = await getData(charRoute);
                // console.log("getCharacter output initial = " + JSON.stringify(output));
            if(keys != null && keys[0] != ''){


                
            for (let key of keys) {
                    // console.log("getCharacter output key = " + key);
                //if(key == keys[0]){
                output = output[key]
                /*} else{
                output = output.key;
            }*/
                // console.log("getCharacter output not_final = " + JSON.stringify(output));
            }
                
            }
            console.log("getCharacter true output = " + JSON.stringify(output));
            for (let i in output) {
                    console.log("getCharacter i = " + i);
                     console.log("getCharacter output[i] = " + JSON.stringify(output[i]));
                if (output[i] == null || output[i] == '') {
                    const newData = await getAchievement.apply(null, [achievRoute, ...keys.slice(2,keys.length), i]);
                    // console.log("getAchievement.apply returns: " + JSON.stringify(newData));

                    
                        // console.log("newdata " + newData);
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = prefix + "Name";
                        descr.innerText = prefix + newData.name;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = prefix + "Effect";
                        descr.innerText = prefix + newData.effect;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = prefix + "Method";
                        descr.innerText = prefix + newData.method;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                    

                } else if (JSON.stringify(output[i]).includes(':')) {
                    // console.log("into getCharacters again (" + JSON.stringify(output[i]).includes(":") + ") (" + JSON.stringify(output[i]) + ")");
                    
                    getCharacterAchievements.apply(null, [outputDiv, (prefix + "     "), charRoute, achievRoute, ...keys, i]);
                } else {
                    const newData = await getAchievement.apply(null, [achievRoute, ...keys.slice(2,keys.length), i]);
                    // console.log("getAchievement.apply returns: " + JSON.stringify(newData));
                    
                        // console.log("newdata " + newData);
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = prefix + "Name";
                        descr.innerText = prefix + newData.name;
                        descr.innerText = descr.innerText.replace("{n}", output[i]);
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = prefix + "Effect";
                        descr.innerText = prefix + newData.effect;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = prefix + "Method";
                        descr.innerText = prefix + newData.method;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                    
                }
            }

        }

    }
    


}


                    /*
                        for (let t in newData) {
                        
                        console.log("newdata[t] " + newData[t]);
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = "Name";
                        descr.innerText = prefix + newData[t].name;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Effect";
                        descr.innerText = newData[t].effect;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));

                        title.innerText = "Method";
                        descr.innerText = newData[t].method;
                        outputDiv.appendChild(title.cloneNode(true));
                        outputDiv.appendChild(descr.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                        outputDiv.appendChild(br.cloneNode(true));
                    }*/
