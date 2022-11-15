const subarr = (nums) => {
  let empArr = [];

  function helper(nums, i, subset) {
    if (i === nums.length) {
      empArr.push(subset.slice());
      return;
    }
    helper(nums, i + 1, subset);
    subset.push(nums[i]);
    helper(nums, i + 1, subset);
    subset.pop();
  }
  helper(nums, 0, []);
  console.log(empArr);
  return empArr;
};

subarr([1, 3, 2, 4]);
