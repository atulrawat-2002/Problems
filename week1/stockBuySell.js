/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        // code here
        let i = 0;
        // 5 4 3 2 1
        let j = 1;
        let buy = -1;
        let sell = -1;
        let profit = 0;
        while(j < prices.length - 1){
            if(prices[i] < prices[j] && buy === -1){
                    buy = i;
                    j++;
            }
            if(prices[j] > prices[j+1]){
                if(buy != -1){
                    sell = j;
                    profit += prices[sell] - prices[buy];
                    buy = -1;
                    i = j + 1;
                    j = j + 1;
                }
            }
            else {
                j++;
                i++;
            }
        }
        if(buy != -1){
            profit += prices[prices.length - 1] - prices[buy]; 
        }
        console.log(profit);
    }

    let arr = [7,6,4,3,1];
    maxProfit(arr);