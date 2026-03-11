
Function.prototype.callPolyfill = function(context, ...args) {
    
    const fun = Symbol();

    context[fun] = this;
    
    return context[fun](...args);

    return result

}
