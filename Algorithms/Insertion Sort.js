
class Solution {
    insertionSort(arr) {
        
        for (let i = 1; i < arr.length; i++) {
            let index = arr[i];
            let j = i - 1;
            
            while(j >= 0 && arr[j] > index) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = index;
        }
    }
}