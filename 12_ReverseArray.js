let arr = [1, 2, 3, 4, 5, 6]

for( let i = 0, j = arr.length-1; i < (arr.length-1)/2 && j >= 0; i++, j-- ){
    let n = arr[i]
    arr[i] = arr[j]
    arr[j] = n
}

for( let i = 0; i < arr.length; i++ ){
    console.log(arr[i])
}