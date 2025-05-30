class BubbleSort{
    sort(arr){
        for( let i = 0; i < arr.length; i++ ){
            for( let j = i; j < arr.length; j++ ){
                if( arr[i] < arr[j] ){
                    let temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp

                }
            }
        }
        return arr
    }
}
const data = new BubbleSort()
console.log( data.sort([54, 8, 0, 76]) )