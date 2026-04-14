import { getAchievement } from 'https://gael-58.github.io/achievements_thing/src/js/get_achievement.js';

export async function getCharacterDetails(charRoute, achievRoute, key) {
    const divCharacterDetails = document.createElement("div");
    const urlCharacters = charRoute;
    let data = await getData(urlCharacters);
    if (data[key] != null && data[key] != '') {
        const section = document.createElement("h1");
        const subSection = document.createElement("h1");
        const br = document.createElement("br");
        section.innerText = "Name & details";
        
        if(data[key].name != null && data[key].name != ""){

        const true_name = document.createElement("h6");
        true_name.innerText = data[key].name;
        divCharacterDetails.append(true_name.cloneNode(true));

        }
        if(data[key].display_name != null && data[key].display_name != ""){
        subSection.innerText = "name";
        const name = document.createElement("h2");
        name.innerText = data[key].display_name;
        divCharacterDetails.append(subSection.cloneNode(true));
        divCharacterDetails.append(name.cloneNode(true));
        }
        if(data[key].details != null && data[key].details != ""){
        subSection.innerText = "description";
        const details = document.createElement("p");
        details.innerText = data[key].display_name;
        divCharacterDetails.append(subSection.cloneNode(true));
        divCharacterDetails.append(details.cloneNode(true));
        }
        divCharacterDetails.append(br.cloneNode(true));
        divCharacterDetails.append(br.cloneNode(true));
        divCharacterDetails.append(br.cloneNode(true));
        divCharacterDetails.append(br.cloneNode(true));
        section.innerText = "Achievements:";
        divCharacterDetails.append(section.cloneNode(true));
        getCharacterAchievements(divCharacterDetails, charRoute, achievRoute, key);

        function getCharacterAchievements(outputDiv, charRoute, achievRoute, ...keys) {
            output = charRoute;
            for (key of keys) {
                output = output[key];
            }

            for (let i in output) {
                if (output[i] == null || output[i] == '') {
                    for (t of getAchievement(achievRoute, keys)) {
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = "Name";
                        descr.innerText = t.name;
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));

                        title.innerText = "Effect";
                        descr.innerText = t.effect;
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));

                        title.innerText = "Name";
                        descr.innerText = t.method;
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));
                        outputDiv.append(br.cloneNode(true));
                        outputDiv.append(br.cloneNode(true));
                    }

                } else if (output[i].constructor === ({}).constructor) {
                    getCharacterAchievements(charRoute, keys.push(i));
                } else {
                    for (t of getAchievement(achievRoute, keys)) {
                        const title = document.createElement("h4");
                        const descr = document.createElement("p");
                        const br = document.createElement("br");
                        title.innerText = "Name";
                        descr.innerText = t.name.replace("{n}", output[i]);
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));

                        title.innerText = "Effect";
                        descr.innerText = t.effect;
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));

                        title.innerText = "Name";
                        descr.innerText = t.method;
                        outputDiv.append(title.cloneNode(true));
                        outputDiv.append(descr.cloneNode(true));
                        outputDiv.append(br.cloneNode(true));
                        outputDiv.append(br.cloneNode(true));
                    }
                }
            }

        }

    }

    return divCharacterDetails.cloneNode(true);

}


