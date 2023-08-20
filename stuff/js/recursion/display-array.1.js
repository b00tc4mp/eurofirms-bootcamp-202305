var nums = [10, 20, 30, 40, 50]

function display(array) {
    (function iterate(index) {
        if (index < array.length) {
            console.log(array[index])

            iterate(index + 1)
        }
    })(0)
}

display(nums)
// VM581: 6 10
// VM581: 6 20
// VM581: 6 30
// VM581: 6 40
// VM581: 6 50