var nums = [10, 20, 30, 40, 50]

function display(array) {
    (function iterate(index = 0) {
        if (index < array.length) {
            console.log(array[index])

            iterate(index + 1)
        }
    })()
}

display(nums)
// VM576:6 10
// VM576:6 20
// VM576:6 30
// VM576:6 40
// VM576:6 50