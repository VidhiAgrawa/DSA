let arr = [23, 45, 8, 9, 25, 89]
let num = 0
for( let i = 0; i < arr.length-1; i++ ){
    if( arr[i] > num ){
        num = arr[i]
        console.log(num)
    }
}