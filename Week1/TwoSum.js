var twoSum = function (nums, target) {
    let numToIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        // hasOwnProperty(): 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환함
        // const obj = {
        //     a: 1
        // };
        // obj.hasOwnProperty("a"); --> true
        if (numToIndexMap.hasOwnProperty(diff)) {
            return [i, numToIndexMap[diff]];
        }
        numToIndexMap[nums[i]] = i;
    }
    return null;
};