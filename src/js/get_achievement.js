import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getAchievement(route, ...keys){
    const data = route;
    let output = getData(data);
    for(let key of keys){
         console.log(output);
        output = output[key];
        
    }
    console.log(output);
    return output;
}
