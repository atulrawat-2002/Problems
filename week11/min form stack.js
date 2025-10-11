class SpecialStack {
    constructor() {
        // Define Stack
        this.st = [];
    }

    push(x) {
        // Push element onto the stack
        if(this.st.length) {
            if(this.st[this.st.length - 1][1] > x) {
                this.st.push([x, x]);
            } else this.st.push([x, this.st[this.st.length - 1][1]]);
        } else this.st.push([x, x]);
    }

    pop() {
        // Pop the top element from the stack
        if(this.st.length) {
            this.st.pop();
        } 
    }

    peek() {
        // Return the top element of the stack
        if(this.st.length) return this.st[this.st.length - 1][0];
        else return -1;
    }

    isEmpty() {
        // Check if the stack is empty
        return this.st.length ? false : true;
    }

    getMin() {
        // Get the minimum element in the stack
        if(this.st.length) return this.st[this.st.length - 1][1];
        else return -1;
    }
}





