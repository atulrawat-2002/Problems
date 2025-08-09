/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let freaq = new Array(citations.length + 1).fill(0);

    for(let value of citations) {
        if(value > citations.length) freaq[freaq.length - 1]++;
        else freaq[value]++;
    }

    let i = citations.length;
    ans = citations.length;

    while(i > 0) {
        if(freaq[i] >= i) return ans;

        else {
            freaq[i - 1] += freaq[i];
            ans = i - 1;
            i--;
        }
    }

    return ans;

};