class insertionSort{
    sort(arr){
        for( let i = 1; i < arr.length; i++ ){
            for( let j = i; j > 0; j-- ){
                if( arr[j] < arr[j-1] ){
                    let temp = arr[j]
                    arr[j] = arr[j-1]
                    arr[j-1] = temp
                }
            }
        }
        return arr
    }
}

const data = new insertionSort()
console.log( data.sort( [ 12, 10, 43, 76, 9, 5 ] ) )