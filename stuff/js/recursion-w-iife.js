var nums = [10, 20, 30, 40, 50]

//for (var i = 0; i < nums.length; i++) console.log(nums[i])

//nums.forEach(num => console.log(num))

function forEach(array, callback) {
    (function iterate(index = 0) {
        if (index < array.length) {
            callback(array[index])

            iterate(index + 1)
        }
    })()
}

forEach(nums, num => console.log(num))
// VM442: 17 10
// VM442: 17 20
// VM442: 17 30
// VM442: 17 40
// VM442: 17 50