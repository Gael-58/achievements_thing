export async function getAchievement(route, ...keys){
    data = route;
    output = data;
    for(key of keys){
        output = output[key];
    }
    return output;
}