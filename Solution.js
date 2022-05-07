
/**
 * @param {string} input
 * @return {number[]}
 */
var findPermutation = function (input) {
    const smallestPermutation = new Array(input.length + 1).fill(0);
    let lastUnfilledIndex = 0;

    for (let i = 1; i <= input.length; ++i) {
        if (input.charAt(i - 1) === 'I') {
            fillArray(smallestPermutation, i, lastUnfilledIndex);
            lastUnfilledIndex = i;
        }
    }

    fillArray(smallestPermutation, input.length + 1, lastUnfilledIndex);
    return smallestPermutation;
};

/**
 * @param {number[]} smallestPermutation
 * @param currentIntegerToFill
 * @param lastUnfilledIndex
 * @return {void}
 */
function fillArray(smallestPermutation, currentIntegerToFill, lastUnfilledIndex) {
    let index = lastUnfilledIndex;
    while (currentIntegerToFill > lastUnfilledIndex) {
        smallestPermutation[index] = currentIntegerToFill;
        ++index;
        --currentIntegerToFill;
    }
}
