let arr = [1, 2, 3, 1, 4, 5]
let num = 0

for( let i = 0; i < arr.length-1; i++ ){
    for ( let j = i + 1; arr.length-1; j++ ){
        if( arr[i] == arr[j] ){
            console.log("Got the Target : " , arr[i])
        }
    }
}
