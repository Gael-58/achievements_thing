import { getData } from 'https://gael-58.github.io/achievements_thing/src/js/getData.js';

export async function getAchievement(route, ...keys){
    const data = route;
    let output = await getData(data);
    
    for(let key of keys){
        if(key == keys[0]){
        output = output[key]
        } else{
            output = output.key;
        }
         console.log(output);
        
    }
    console.log(output);
    return output;
}
