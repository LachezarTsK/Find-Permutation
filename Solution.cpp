
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    vector<int> findPermutation(string input) {
        vector<int> smallestPermutation(input.size() + 1);
        int lastUnfilledIndex = 0;

        for (int i = 1; i <= input.length(); ++i) {
            if (input[i - 1] == 'I') {
                fillArray(smallestPermutation, i, lastUnfilledIndex);
                lastUnfilledIndex = i;
            }
        }

        fillArray(smallestPermutation, input.length() + 1, lastUnfilledIndex);
        return smallestPermutation;
    }
    
private:
    void fillArray(vector<int>& smallestPermutation, int currentIntegerToFill, int lastUnfilledIndex) {
        int index = lastUnfilledIndex;
        while (currentIntegerToFill > lastUnfilledIndex) {
            smallestPermutation[index] = currentIntegerToFill;
            ++index;
            --currentIntegerToFill;
        }
    }
};
