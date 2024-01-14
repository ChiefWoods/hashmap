import LinkedList from './LinkedList.js';

export default class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array(this.capacity).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    hashCode = hashCode % this.capacity;

    return hashCode;
  }
  
  get(key) {
    const bucket = this.buckets[this.hash(key)];

    if (bucket.find(key)) {
      return bucket.at(bucket.find(key)).key;
    }

    return null;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];

    return bucket.contains(key);
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];

    bucket.removeAt(bucket.find(key));
  }

  length() {
    this.buckets.reduce((acc, bucket) => {
      acc + bucket.size();
    }, 0);
  }

  clear() {
    this.buckets = Array(this.capacity).map(() => new LinkedList());
  }

  keys() {
    const keys = [];

    for (const bucket of this.buckets) {
      keys = [...keys, ...bucket.keys()]
    }

    return keys;
  }

  resize() {
    this.capacity *= 2;

    const newBuckets = Array(this.capacity).map(() => new LinkedList());

    for (const bucket of this.buckets) {
      for (const entry of bucket.entries()) {
        newBuckets[this.hash(entry[0])].append(entry[0], entry[1]);
      }
    }

    this.buckets = newBuckets;
  }
}