const num1 = "11101"
const num2 = "10110"
let carry = 0
let result = ""

for( let i = num1.length-1, j = num2.length-1; i >= 0|| j >= 0|| carry; i--, j-- ){
    let A = parseInt(num1[i])
    let B = parseInt(num2[j])

    if( i >= 0 ){
        carry += A
    }
    if( j >= 0 ){
        carry += B
    }

    result = (carry % 2) + result
    carry = Math.floor(carry / 2)
}
console.log(result)