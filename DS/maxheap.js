class MaxHeap {
  constructor() {
    this.heap = [];
    this.length = 0;
  }
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  bubbleDown() {
    if (this.heap.length > 0) {
      this.swap(this.heap, 0, this.heap.length - 1);
      let root = this.heap.pop();
      this.sift();
      console.log(root);
      console.log(this.heap);
    } else {
      console.log("heap is empty");
      return;
    }
  }
  bubbleUp() {
    // find last item index in heap
    let lastIdx = this.heap.length - 1;
    // find item with index
    let lastItm = this.heap[lastIdx];
    // loop while child(index) > 0
    while (lastIdx > 0) {
      // find parent index with Math.floor((indx-1)/2)
      let parentIdx = Math.floor((lastIdx - 1) / 2);
      // find parent element with index
      let parentItm = this.heap[parentIdx];
      // break loop if child <= parent
      if (lastItm <= parentItm) break;
      // if not swap parent index and child index
      this.swap(this.heap, parentIdx, lastIdx);
      // update child to parent
      lastIdx = parentIdx;
    }
    // console.log(this.heap);
  }
  sift() {
    let idx = 0;
    let fItm = this.heap[0];
    let len = this.heap.length;
    while (idx < this.heap.length) {
      let lIdx = idx * 2 + 1;
      let rIdx = idx * 2 + 2;
      let swapp = false;
      let lItm;
      let rItm;
      if (lIdx < len) {
        lItm = this.heap[lIdx];
        if (lItm > fItm) {
          swapp = lIdx;
        }
      }
      if (rIdx < len) {
        rItm = this.heap[rIdx];
        if ((!swapp && rItm > fItm) || (swapp && rItm > lItm)) {
          swapp = rIdx;
        }
      }
      if (!swapp) break;
      this.swap(this.heap, idx, swapp);
      idx = swapp;
    }
  }
}

const max = new MaxHeap();
max.insert(10);
max.insert(20);
max.insert(15);
max.insert(17);
max.insert(33);
console.log(max.heap);
// max.insert(5);
// max.bubbleDown();
// max.bubbleDown();
// max.bubbleDown();
// max.bubbleDown();
// max.bubbleDown();
// max.bubbleDown();
