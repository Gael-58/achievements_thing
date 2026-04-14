export async function getAchievement(route, ...keys){
    const data = route;
    let output = data;
    for(key of keys){
        output = output[key];
    }
    return output;
}
