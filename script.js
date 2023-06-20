function dedupeSorted(nums) {
    arr = [];
    for (let i=0; i<nums.length; i++) {
        arr.push(nums[i])
        if (nums[i] == nums[i+1]) {
            arr.pop(nums[i]);
        }
    } return arr;
}

let result = dedupeSorted(nums4);
console.log(result);