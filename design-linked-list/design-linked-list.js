function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  if (index === 0) return this.head.val;
  if (index === this.length - 1) return this.tail.val;

  let current = this.head;
  let cnt = 0;
  while (cnt !== index) {
    current = current.next;
    cnt++;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);

  const newNode = new Node(val);
  let prevNode = this.head;
  let nextNode = this.head;

  while (index--) {
    prevNode = nextNode;
    nextNode = nextNode.next;
  }

  prevNode.next = newNode;
  newNode.next = nextNode;

  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */

MyLinkedList.prototype.pop = function () {
  if (!this.length) return null;

  let current = this.head;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return current;
  }

  let prev = this.head;

  while (current.next) {
    prev = current;
    current = current.next;
  }

  this.tail = prev;
  prev.next = null;
  this.length--;
};

MyLinkedList.prototype.shift = function () {
  if (!this.length) return null;

  let targetNode = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = targetNode.next;
    targetNode.next = null;
  }

  this.length--;
  return targetNode;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return;
  if (index === this.length - 1) return this.pop();
  if (index === 0) return this.shift();

  let prevNode = this.head;
  let targetNode = this.head;
  while (index--) {
    prevNode = targetNode;
    targetNode = targetNode.next;
  }

  prevNode.next = targetNode.next;
  this.length--;
};
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
