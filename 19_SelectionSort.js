class SelectionSort{
    sort(arr){
        for( let i = 0; i < arr.length; i++ ){
            let min = i
            for( let j = i+1; j < arr.length; j++ ){
                if( arr[j] < arr[min] ){
                    let temp = arr[j]
                    arr[j] = arr[min]
                    arr[min] = temp
                }
            }
        }
        return arr
    }
}

const data = new SelectionSort()
console.log( data.sort( [ 12, 100, 93, 73, 90, 5 ] ) )