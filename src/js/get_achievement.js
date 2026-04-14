import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getAchievement(route, ...keys){
    const data = route;
    let output = getData(data);
    for(key of keys){
        output = output[key];
    }
    return output;
}