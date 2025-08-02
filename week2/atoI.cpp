#include <string>
#include <cctype>
#include <climits>

using namespace std;



class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.length();
        long long ans = 0; // Use long long to catch overflow before clamping
        bool isNegative = false;

        // Step 1: Trim leading whitespaces
        while (i < n && s[i] == ' ') i++;

        // Step 2: Check if string is now empty
        if (i == n) return 0;

        // Step 3: Handle sign
        if (s[i] == '-' || s[i] == '+') {
            if (s[i] == '-') isNegative = true;
            i++;
        }

        // Step 4: Parse digits
        while (i < n && isdigit(s[i])) {
            ans = ans * 10 + (s[i] - '0');

            // Step 5: Clamp overflow immediately
            if (!isNegative && ans >= INT_MAX) return INT_MAX;
            if (isNegative && -ans <= INT_MIN) return INT_MIN;

            i++;
        }

        // Step 6: Apply sign
        ans = isNegative ? -ans : ans;

        return static_cast<int>(ans);
    }
};
