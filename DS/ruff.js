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
      // if not swap parent and child
      this.swap(this.heap, parentIdx, lastIdx);
      // update child to parent
      lastIdx = parentIdx;
    }
    console.log(this.heap);
  }