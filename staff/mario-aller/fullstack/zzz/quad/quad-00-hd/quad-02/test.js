var a, a_placed
var b, c

display('Ver item colocado')
a = new Block(20, 30)
b = new Dim2(4, 5)
a_placed = new BlockPlaced(a, b, BlockPlaced.ROTATED_POSITION)
console.log(a_placed)

display('Ver positivo y negativo')
a = new Dim(-787)
console.log(a)
console.log(a.isNegative())

display('Suma')
a = new Dim2(4, 5)
b = new Dim2(2, 3)
c = a.add(b)
console.log(c)