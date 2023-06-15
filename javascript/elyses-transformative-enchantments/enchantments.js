// @ts-check


/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const reduced = deck.reduce((accumulator, card) => {
    if (card === 3) {
      accumulator.push(card,card,card)
    } else {
      accumulator.push(card)
    }
    return accumulator
  }, [])
  return reduced
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middle = (deck.length / 2) - 1
  return deck.slice(middle, middle + 2)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstCard = deck[0];
  const lastCard = deck[deck.length - 1];
  const sandwichDeck = deck.slice(1, -1); // did not use pop and shift to rely on lesson's concepts
  sandwichDeck.splice(sandwichDeck.length / 2, 0, lastCard, firstCard);
  return sandwichDeck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((card1, card2) => {
    const card1Num = Number(card1);
    const card2Num = Number(card2)
    if (Number(card1Num) < Number(card2Num)) {
      return -1
    }
    if (Number(card1Num) > Number(card2Num)) {
      return 1
    }
    return 0
  })
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}
