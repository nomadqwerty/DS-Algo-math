const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const permute = (nums) => {
  let per = [];

  function helper(nums, i) {
    if (i === nums.length - 1) {
      per.push(nums.slice());
      console.log(per);
      return;
    }
    for (let j = i; j < nums.length; j++) {
      swap(nums, i, j);
      helper(nums, i + 1);
      swap(nums, i, j);
    }
  }
  helper(nums, 0);
  return per;
};

permute([1, 2, 3]);
