
export function selectorForLibrary(chosenArray, category) {
    return chosenArray.filter( place =>  (`"${place.category}"`) == category ) 
} 