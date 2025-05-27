let num = 10
let factorial = 1

while( num != 1 ){
    factorial = factorial * num
    num = num - 1
    
}
let count = factorial.toString().length
console.log(count)

// another way

if( N == 0 || N == 1 ) return 1

let pi = Math.PI
let e = Math.E

let logfactorial = 0.5 * Math.log10(2 * pi * N) + N * Math.log10( N / e )
return Math.floor(logfactorial) + 1