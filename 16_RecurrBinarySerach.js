class RecurrBinarySearch{
    search( target, arr, left = 0, right = arr.length-1 ){
        let mid = Math.floor( (left + right)/2 )
        if( left > right ){
            return -1
        }
        if( arr[mid] == target ){
            return arr[mid]
        }
        if( arr[mid] < target ){
            return this.search( target, arr, mid + 1, right )
        }
        if( arr[mid] > target ){
            return this.search( target, arr, left, mid - 1 ) 
        }

    }
}

const data  = new RecurrBinarySearch()
console.log( "Got: ", data.search( 7, [2, 3, 6, 7, 8] ) )