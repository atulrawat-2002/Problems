function getProfit(prices){
    let profit = 0
    // 1 2 3 4 5
    for(let i = 0; i < prices.length - 1; i++){
        if(prices[i] < prices[i + 1]){
            profit += prices[i + 1] - prices[i];
        }
    }
    console.log(profit);
}


getProfit([1, 2, 3, 4, 5])