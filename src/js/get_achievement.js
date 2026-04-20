import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getAchievement(route, ...keys) {
    const data = route;
    let output = await getData(data);
    // console.log("getAchievement keys = " + keys.toString());

    for (let key of keys) {
        output = output[key];
    }
    // console.log("getAchievement output = " + JSON.stringify(output));
    return output;
}
