var StockSpanner = function() {
    this.stack = []; // stores pairs [price, span]
};

StockSpanner.prototype.next = function(price) {
    let span = 1;

    // Pop all prices less than or equal to current price
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }

    this.stack.push([price, span]);
    return span;
};
