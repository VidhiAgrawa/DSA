let arr = [1, 2, 2, 3, 1, 4, 5]
let num = 0


for( let i = 0; i < arr.length-1; i++ ){
    if( arr[i] != arr[num+1] ){
        arr[i] = arr[num]
        num++
    }
    else{
        console.log("Got Target", arr[num], arr[i])

    }
}

