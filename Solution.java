
public class Solution {

    public int[] findPermutation(String input) {
        int[] smallestPermutation = new int[input.length() + 1];
        int lastUnfilledIndex = 0;

        for (int i = 1; i <= input.length(); ++i) {
            if (input.charAt(i - 1) == 'I') {
                fillArray(smallestPermutation, i, lastUnfilledIndex);
                lastUnfilledIndex = i;
            }
        }

        fillArray(smallestPermutation, input.length() + 1, lastUnfilledIndex);
        return smallestPermutation;
    }

    private void fillArray(int[] smallestPermutation, int currentIntegerToFill, int lastUnfilledIndex) {
        int index = lastUnfilledIndex;
        while (currentIntegerToFill > lastUnfilledIndex) {
            smallestPermutation[index] = currentIntegerToFill;
            ++index;
            --currentIntegerToFill;
        }
    }
}
