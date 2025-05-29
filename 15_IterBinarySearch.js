class IteraBinarySearch{
    search( target, arr ){
        let left = 0
        let right = arr.length-1
        while( left <= right ){
            let mid = Math.floor( (left + right)/2 )
            if( arr[mid] == target ){
                return arr[mid]
            }
            if( arr[mid] < target ){
                left = mid + 1
            }
            if( arr[mid] > target ){
                right = mid - 1 
            }

        }
    }
}

const data  = new IteraBinarySearch()
console.log( "Got: ", data.search( 7, [2, 3, 6, 7, 8, 0] ) )