describe('TEST slice')

describe('CASE slice last element')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 4)

    console.log(sliced)
    // [ 'elephant' ]
}

describe('CASE slice last 3 elements')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 2)

    console.log(sliced)
    // [ 'camel', 'duck', 'elephant' ]
}

describe('CASE slice last 3 elements counting from the end')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, -3)

    console.log(sliced)
    // [ 'camel', 'duck', 'elephant' ]
}

describe('CASE slice last 4 elements counting from the end')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, -4)

    console.log(sliced)
    // [ 'bison', 'camel', 'duck', 'elephant' ]
}

describe('CASE slice all elements counting from the end')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, -10)

    console.log(sliced)
    // [ 'bison', 'camel', 'duck', 'elephant' ]
}

describe('CASE slice 2 elements from start to end indexes')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 2, 4)

    console.log(sliced)
    // [ 'camel', 'duck' ]
}

describe('CASE slice no elements with end 0')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 2, 0)

    console.log(sliced)
    // []
}

describe('CASE slice from start to negative end')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 2, -1)

    console.log(sliced)
    // ['camel', 'duck']
}

describe('CASE slice from start to very big end')

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const sliced = slice(animals, 2, 100)

    console.log(sliced)
    // ['camel', 'duck']
}

