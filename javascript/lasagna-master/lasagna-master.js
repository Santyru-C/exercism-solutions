/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// not assigned default parameters evaluate to undefined
export function cookingStatus(remainingTime) { //time evaluated in minutes
    if (remainingTime === 0) return "Lasagna is done."
    if (remainingTime === undefined) return "You forgot to set the timer."
    return "Not done, please wait."
};

//default parameters
export function preparationTime(layers, timePerLayer = 2){ 
    return layers.length * timePerLayer
}

export function quantities(layers) {
    const SAUCE_PER_LAYER = 0.2 // litres
    const NOODLES_PER_LAYER = 50 // grams
    let sauce_layers = layers.filter((layer) => layer === "sauce").length
    let noodle_layers = layers.filter((layer) => layer === "noodles").length
    let sauce = SAUCE_PER_LAYER * sauce_layers
    let noodles = NOODLES_PER_LAYER * noodle_layers

    return { noodles, sauce }
}


