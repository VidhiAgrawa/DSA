let nums = [2, 4, 5, 8, 9]
let target = 9
var twosum = function( nums, target ){
    let i = 0, j = nums.length-1 
    while( i < j ){
        let sum = nums[i] + nums[j]
        if( sum == target ){
            console.log("pair", nums[i], nums[j])
        }
    }
}

twosum(nums, target)