
var ArrayWrapper = function(nums) {
    this.array = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    
    return this.array.reduce((sum, cur) => (sum + cur), 0);
    
}

ArrayWrapper.prototype.toString = function() {
    let res = this.array.join(',');
    res = '[' + res + ']';
    return res
}

