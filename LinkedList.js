import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(key, value) {
    if (!this.headNode) {
      this.headNode = new Node(key, value);
    } else {
      let lastNode = this.headNode;
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
      lastNode.nextNode = new Node(key, value);
    }
  }

  prepend(key, value) {
    let newNode = new Node(key, value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let length = 0;
    let lastNode = this.headNode;
    while (lastNode) {
      length++;
      lastNode = lastNode.nextNode;
    }
    return length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let lastNode = this.headNode;
    while (lastNode.nextNode) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index) {
    if (index >= this.size()) {
      return "Out of range";
    } else {
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        node = node.nextNode;
      }
      return node;
    }
  }

  pop() {
    if (this.headNode) {
      let node = this.headNode;
      if (node.nextNode) {
        let previous = null;
        while (node.nextNode) {
          previous = node;
          node = node.nextNode;
        }
        if (previous) {
          previous.nextNode = null;
        }
      } else {
        this.headNode = null;
      }
    }
  }

  contains(key) {
    if (this.headNode) {
      let node = this.headNode;
      while (node) {
        if (node.key === key) {
          return true;
        }
        node = node.nextNode;
      }
    }
    return false;
  }

  find(key) {
    let node = this.headNode;
    let count = 0;
    while (node) {
      if (node.key === key) {
        return count;
      }
      node = node.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let node = this.headNode;
    let str = "";
    while (node) {
      str += `( ${node.key}: ${node.value} ) -> `;
      node = node.nextNode;
    }
    console.log(str += "null");
  }

  insertAt(index, key, value) {
    if (index >= this.size()) {
      console.log("Out of range");
    } else if (index === 0) {
      let newNode = new Node(key, value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else {
      let previous = null;
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        previous = node;
        node = node.nextNode;
      }
      previous.nextNode = new Node(key, value);
      previous.nextNode.nextNode = node;
    }
  }

  removeAt(index) {
    if (index >= this.size()) {
      console.log("Out of range");
    } else if (index === 0) {
      this.headNode = this.headNode.nextNode;
    } else {
      let previous = null;
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        previous = node;
        node = node.nextNode;
      }
      previous.nextNode = node.nextNode;
    }
  }

  keys() {
    const keys = [];

    let node = this.headNode;

    while (node) {
      keys.push(node.key);
      node = node.nextNode;
    }

    return keys;
  }

  values() {
    const values = [];

    let node = this.headNode;

    while (node) {
      values.push(node.value);
      node = node.nextNode;
    }

    return values;
  }

  entries() {
    const entries = [];

    let node = this.headNode;

    while (node) {
      entries.push([node.key, node.value]);
      node = node.nextNode;
    }

    return entries;
  }
}
