/************************** USING INSERTION SORT ******************** */


class Solution {
    getMedian(arr) {
        // code here
        let sorted = [];
        let ans = [];
        
        for(let i = 0; i < arr.length; i++) {
            let newVal = arr[i];
            let j = 0;
            while(j < sorted.length && sorted[j] < newVal) {
                j++
            }
            sorted.splice(j, 0, newVal);
            
            
            let n = sorted.length;
            
            if(n % 2 === 1) {
                ans.push(sorted[Math.floor(n / 2)]);
            } else {
                let mid = n / 2;
                ans.push( ( sorted[mid] + sorted[mid - 1]) / 2 );
            }
        }
        return ans;
    }
}