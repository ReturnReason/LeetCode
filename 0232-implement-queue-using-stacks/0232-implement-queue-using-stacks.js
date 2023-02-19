
var MyQueue = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.q.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.q.at(-1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.q.length) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */