// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

//submit in Leet Code already *****

const sortedArrayToBST = (nums) => {
  return convertToBST(nums, 0, nums.length - 1);
};

const convertToBST = (nums, startIdx, endIdx) => {
  if (startIdx > endIdx) return null;
  let mid = Math.ceil((startIdx + endIdx) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = convertToBST(nums, startIdx, mid - 1);
  root.right = convertToBST(nums, mid + 1, endIdx);
  return root;
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
