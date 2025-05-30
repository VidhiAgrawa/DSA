class SearchInRotatedArray{
    constructor( arr ){
        this.arr = arr
    }
    sort(){
        let left = 0
        let right = this.arr.length - 1
        while( left < right ){
            let mid = Math.floor((left + right)/2)
            if( this.arr[mid] > this.arr[right] ){
                left = mid + 1
            }else{
                right = mid
            }
        }
        return left
    }
    
    BinarySearch( target, left, right ){
        let mid = Math.floor( (left + right)/2 )
        if( left > right ) return -1
        if( this.arr[mid] === target ){
            return mid
        }
        if( this.arr[mid] < target ){
            return this.BinarySearch( target, mid + 1, right )
        }
        if( this.arr[mid] > target ){
            return this.BinarySearch( target, left, mid - 1 ) 
        }

    }
    SearchInHalf( target ){
        let middle = this.sort()
        let result = this.BinarySearch( target, 0, middle - 1 )
        if( result == -1 ){
            return this.BinarySearch( target, middle, this.arr.length - 1 )
        }
        return result
    }
    
}
const data = new SearchInRotatedArray( [ 4, 5, 6, 7, 0, 1, 2 ] )
const ans = data.SearchInHalf( 7 ) 
console.log( "Ans: ", ans )