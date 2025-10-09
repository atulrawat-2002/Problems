/************************** EXTREAM BRUTE FORCE ********************* */

function findMax() {
  let n = arr.length;
  let ans = [];

   for (let k = 1; k <= n; k++) {
    
        let maxOfMin = -Infinity;

        // Traverse through all windows of current size k
        for (let i = 0; i <= n - k; i++) {
        
            // Find minimum of current window
            let minVal = arr[i];
            for (let j = 1; j < k; j++) {
                minVal = Math.min(minVal, arr[i + j]);
            }

            // Update maxOfMin if required
            maxOfMin = Math.max(maxOfMin, minVal);
        }

        // Store max of min for current window size
        ans.push(maxOfMin)
    }
  console.log(ans);
}

let arr = [10, 20, 30, 50, 10, 70, 30];

findMax(arr);
